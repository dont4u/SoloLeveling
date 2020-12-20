/*
*	@filename	duriel.js
*	@author		isid0re
*	@desc		duriel quest
*/

function duriel () {
	if (!Pather.accessToAct(2) || Misc.checkQuest(14, 0)) {
		return true;
	}

	if (!Misc.checkQuest(10, 0) && !me.getItem(91)) {
		if (!me.getItem(521)) {
			for (let getAmmy = 0; getAmmy < 5; getAmmy++) {
				try {
					this.amulet();
				} catch (err) {
					print('ÿc9SoloLevelingÿc0: Failed attempt to get amulet');
				}
			}
		}

		if (!me.getItem(92)) {
			for (let getStaff = 0; getStaff < 5; getStaff++) {
				try {
					this.staff();
				} catch (err) {
					print('ÿc9SoloLevelingÿc0: Failed attempt to get staff');
				}
			}
		}

		Quest.cubeItems(91, 92, 521);
	}

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting duriel');
	me.overhead("duriel");

	if (!Pather.checkWP(46)) {
		Pather.getWP(46);
	} else {
		Pather.useWaypoint(46);
	}

	Precast.doPrecast(true);
	Pather.moveToExit(getRoom().correcttomb, true);
	Pather.moveToPreset(me.area, 2, 152);
	Attack.securePosition(me.x, me.y, 30, 3000, true, me.diff === 2);

	if (!Misc.checkQuest(10, 0)) {
		Quest.placeStaff();
	}

	Town.goToTown();
	Town.doChores();
	Town.buyPots(10, "Thawing"); // thawing
	Town.drinkPots();
	Config.MercWatch = false;
	Pather.usePortal(null, me.name);
	delay(1000 + me.ping);
	Pather.useUnit(2, 100, 73);
	Attack.killTarget("Duriel");
	Pickit.pickItems();

	if (!Misc.checkQuest(15, 0)) {
		Quest.tyraelTomb();

		if (!me.inTown) {
			Town.goToTown();
		}

		Town.move("palace");
		Town.npcInteract("jerhyn");
		Pather.moveToExit(50, true);

		if (!me.inTown) {
			Town.goToTown();
		}
	}

	Pather.changeAct();
	Config.MercWatch = true;

	return true;
}
