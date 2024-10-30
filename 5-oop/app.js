"use strict";

const Personnage = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Personnage.prototype.speak = function () {
  console.log(`I am ${this.name}. I speak ${this.language}`);
};

// Orc

const Orc = function (name, language, weapon) {
  Personnage.call(this, "orc", name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Personnage.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.strike = function () {
  console.log(`${this.name} strikes with ${this.weapon}!`);
};

// Elf

const Elf = function (name, language, spell) {
  Personnage.call(this, "elf", name, language);
  this.spell = spell;
};

Elf.prototype = Object.create(Personnage.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.putSpell = function () {
  console.log(`${this.name} puts a spell ${this.spell}!`);
};

const orc1 = new Orc("OrcName", "OrcLang", "an Axe");
const elf1 = new Elf("ElfName", "ElfLang", "Celestial army");
console.log(orc1);
console.log(elf1);
orc1.speak();
orc1.strike();
elf1.speak();
elf1.putSpell();
