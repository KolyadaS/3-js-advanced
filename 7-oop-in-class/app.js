"use strict";

class Personnage {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`I am ${this.name}. I speak ${this.language}`);
  }
}

class Orc extends Personnage {
  constructor(name, language, weapon) {
    super("orc", name, language);
    this.weapon = weapon;
  }

  strike() {
    console.log(`${this.name} strikes with his ${this.weapon}!`);
  }

  speak() {
    console.log(
      `I am an Orc!!! My name is ${this.name}. I speak ${this.language}`
    );
  }
}

class Elf extends Personnage {
  constructor(name, language, spell) {
    super("elf", name, language);
    this.spell = spell;
  }

  putSpell() {
    console.log(`${this.name} puts the spell ${this.spell}!`);
  }

  speak() {
    console.log(`I'm an Elf. Call me ${this.name}. I speak ${this.language}`);
  }
}

const orc1 = new Orc("OrcName", "OrcLang", "Axe");
const elf1 = new Elf("ElfName", "ElfLang", "Celestial army");
console.log(orc1);
console.log(elf1);
orc1.speak();
orc1.strike();
elf1.speak();
elf1.putSpell();
