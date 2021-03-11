
class UnitBattle {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.rechargeTime = 1000 * this.health / 100;
        this.damage = this.health / 100
        this.criticalChance = 10 - this.health / 10
    }
    attack(unit) {
        if (this.criticalChance >= Math.random(0, 100) * 101) unit.health = Math.floor(unit.health - this.damage * 2)
        else
            this.health = Math.floor(unit.health - this.damage)
            this.rechargeTime = Math.floor(1000 * unit.health / 100)
            this.damage = unit.health / 100
            this.criticalChance = 10 - unit.health / 10
    }
};

var units = [];

var unit1 = new UnitBattle("Djura");
var unit2 = new UnitBattle("Djuradj");
var unit3 = new UnitBattle("Djuki");

units.push(unit1, unit2, unit3);

export { UnitBattle, units, unit1, unit2, unit3 };