const Character = function (race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
};

Character.prototype.sayHello = function() {
    console.log(`Привет, меня зовут ${this.name}!`);
  };

const Ork = function (race, name, lang, weapon) {
  Character.call(this, race, name, lang);
  this.weapon = weapon;
};

const Elf = function (race, name, lang,char) {
  Character.call(this, race, name, lang);
  this.char = char;
};

// Наследование прототипа
Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Ork.prototype.hit = function () {
  console.log(`I hit you! ${this.weapon}`);
};

Elf.prototype.setChar = function () {
  console.log(`I make char! ${this.char}`);
};


const ork = new Ork('ork', 'рыжий', "орчий", "Топор" );
ork.sayHello();
ork.hit();
console.log(ork);

const elf = new Elf('elf', 'белый', "эльфийский", "Эльфийский клинок" );
elf.sayHello();
elf.setChar();
console.log(elf);