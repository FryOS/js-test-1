const Character = function (race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
};

Character.prototype.sayHello = function() {
    console.log(`Привет, меня зовут ${this.name}!`);
  };

const Ork = function (race, name, lang, gun) {
  Character.call(this, race, name, lang);
  this.gun = gun;
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

Ork.prototype.toHit = function () {
  console.log("I hit you!");
};

Elf.prototype.setChar = function () {
  console.log("I make char!");
};


const ork = new Ork('ork', 'рыжий', "орчий", true );
ork.sayHello();
ork.toHit();
console.log(ork);

const elf = new Elf('elf', 'белый', "эльфийский", true );
elf.sayHello();
elf.setChar();
console.log(elf);