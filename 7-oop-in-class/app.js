class Character {
  constructor(race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  sayHello = function () {
    console.log(`Привет, меня зовут ${this.name}!`);
  };
}

class Ork extends Character {
  constructor(race, name, lang, gun) {
    super(race, name, lang);
    this.gun = gun;
  }

  hit() {
    console.log("I hit you!");
  }
}

class Elf extends Character {
  constructor(race, name, lang, char) {
    super(race, name, lang);
    this.char = char;
  }

  setChar() {
    console.log("I make char!");
  }
}

const ork = new Ork("ork", "рыжий", "орчий", "Топор");
ork.sayHello();
ork.hit();
console.log(ork);

const elf = new Elf("elf", "белый", "эльфийский", "Эльфийский клинок");
elf.sayHello();
elf.setChar();
console.log(elf);
