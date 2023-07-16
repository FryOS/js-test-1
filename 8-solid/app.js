class Billing {
  constructor(amount) {
     this.amount = amount;
  }

  calculateTotal() {}
}

class FixBilling extends Billing {
  amount = 1;
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  amount = 2;
  constructor(hourBilling) {
    this.hourBilling = hourBilling;
  }

  calculateTotal() {
    const discountAmount = this.amount * (this.hourBilling / 100);
    return this.amount * discountAmount;
  }
}

class ItemBilling extends Billing {
  amount = 3;
  constructor(itemBilling) {
    this.itemBilling = itemBilling;
  }

  calculateTotal() {
    return this.amount * itemBilling;
  }
}



const a = new FixBilling();
console.log(a.calculateTotal());
