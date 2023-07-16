class Car {
  #mark;
  #model;
  #_mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.mileage = mileage;
  }

  set mileage(mileage) {
    this.#_mileage = mileage;
  }

  get mileage() {
    return this.#_mileage;
  }

  getInfo() {
    return `${this.#model} ${this.#mark} ${this.mileage}`;
  }
}

const car = new Car("lada", "vesta", "140000");
console.log(car.getInfo());
car.setMileage = 150000;
console.log(car.getInfo());
