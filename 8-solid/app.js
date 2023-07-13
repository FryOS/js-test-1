class Billing {
  amount;

  calculateTotal(amount) {
    this.amount += amount;
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(hourBilling) {
    this.hourBilling = hourBilling;
  }

  calculateTotal() {
    const discountAmount = this.amount * (this.hourBilling / 100);
    return this.amount * discountAmount;
  }
}

class ItemBilling extends Billing {
  constructor(itemBilling) {
    this.itemBilling = itemBilling;
  }

  calculateTotal() {
    return this.amount * itemBilling;
  }
}
