class Character {
  constructor(name, lang, race) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  sayHello = function () {
    console.log(`Привет, меня зовут ${this.name}!`);
  };
}

class Ork extends Character {
  constructor(name, lang, weapon) {
    super(name, lang);
    this.weapon = weapon;
    this.race = "ork";
  }

  hit() {
    console.log(`Я зарублю тебя своим ${this.weapon}ом`);
  }
}

class Elf extends Character {
  constructor(name, lang, char) {
    super(name, lang);
    this.char = char;
    this.race = "Elf";
  }

  setChar() {
    console.log(`Я заколдую тебя своим ${this.char}`);
  }
}

const ork = new Ork("рыжий", "орчий", "Топор");
ork.sayHello();
ork.hit();

const elf = new Elf("белый", "эльфийский", "Эльфийский клинок");
elf.sayHello();
elf.setChar();

