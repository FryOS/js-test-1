const warehouse = {
  goods: [],
  findGoodById: function (item) {
    if (!item) return;
    return this.goods.find((g) => g.id === item.id);
  },
  addGoodById: function (item) {
    if (!item) {
      console.log("Это не товар");
      return;
    }
    const existGood = this.findGoodById(item);
    if (existGood) {
      console.log("Такой товар уже есть в корзине");
      return;
    }
    this.goods.push(item);
  },
  getWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

warehouse.addGoodById(23);
//warehouse.addGoodById(chair);
//warehouse.addGoodById(paper);
const finded = warehouse.findGoodById(chair);
console.log(finded);
const weight = warehouse.getWeightKg();
console.log(weight);
