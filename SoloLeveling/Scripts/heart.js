/*
*	@filename	heart.js
*	@author		isid0re
*	@desc		get the heart for khalims will
*/

function heart () {
	if (!Pather.accessToAct(3) || me.getItem(554) || me.getItem(174) || Misc.checkQuest(18, 0)) {
		return true;
	} // skip heart

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting heart');
	me.overhead("heart");

	if (!Pather.checkWP(80)) {
		Pather.getWP(80);
	} else {
		Pather.useWaypoint(80);
	}

	Precast.doPrecast(true);

	if (!Pather.moveToExit([80, 92, 93], true) || !Pather.moveToPreset(me.area, 2, 405)) {
		print('ÿc9SoloLevelingÿc0: Failed to get the heart');
	}

	Attack.clear(0x7); // clear level
	Quest.collectItem(554, 405);
	Town.goToTown();
	Quest.stashItem(554);

	return true;
}
