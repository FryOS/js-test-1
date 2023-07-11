class Car {
  #mark;
  #model;
  #mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#mileage = mileage;
  }

  set setMileage(mileage) {
    this.#mileage = mileage;
  }

  get getMileage() {
    return this.#mileage;
  }

  getInfo() {
    return `${this.#model} ${this.#mark} ${this.getMileage}`;
  }
}

const car = new Car("lada", "vesta", "140000");
console.log(car.getInfo());
car.setMileage = 150000;
console.log(car.getInfo());
