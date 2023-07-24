class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {}
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hourBilling) {
    super(amount);
    this.hourBilling = hourBilling;
  }

  calculateTotal() {
    const discountAmount = this.amount * (this.hourBilling / 4);
    return this.amount * discountAmount;
  }
}

class ItemBilling extends Billing {
  constructor(amount, itemBilling) {
    super(amount);
    this.itemBilling = itemBilling;
  }
  calculateTotal() {
    return this.amount * this.itemBilling;
  }
}

const fix = new FixBilling(5);
console.log("FixBilling " + fix.calculateTotal());

const hour = new HourBilling(10, 5);
console.log("HourBilling " + hour.calculateTotal()); 

const item = new ItemBilling(7,10);
console.log("ItemBilling " + item.calculateTotal());

