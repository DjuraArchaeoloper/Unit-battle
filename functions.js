
import { UnitBattle, units, unit1, unit2, unit3} from './config.js';

function getUnit(n) {
  var result = Math.floor(Math.random() * (units.length));
  if (result == n || units[result].health < 0)
    return getUnit(n);
  else
    return units[result];
};

function fight(n) {
  var fighter = units[n];
  var target = getUnit(n);
  fighter.attack(target);
  console.log(units);
};

var battle0 = unitFight1();
var battle1 = unitFight2();
var battle2 = unitFight3();

function unitFight1() {
  return setInterval(() => {
    if (units[0].health <= 0) {
      clearInterval(battle0);
    } else
      fight(0);
  }, units[0].rechargeTime);
};

function unitFight2() {
  return setInterval(() => {
    if (units[1].health <= 0) {
      clearInterval(battle1);
    } else
      fight(1);
  }, units[1].rechargeTime);
};

function unitFight3() {
  return setInterval(() => {
    if (units[2].health <= 0) {
      clearInterval(battle2);
    } else
      fight(2);
  }, units[2].rechargeTime);
};

export { getUnit, fight, unitFight1, unitFight2, unitFight3, battle0, battle1, battle2 };