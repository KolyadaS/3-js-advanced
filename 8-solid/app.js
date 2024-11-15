"use strict";

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    console.log((this.amount *= this.value));
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
    this.value = 1;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.value = hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.value = items;
  }
}

const bill1 = new FixBilling(2);
bill1.calculateTotal();

const bill2 = new HourBilling(1, 5);
bill2.calculateTotal();

const bill3 = new ItemBilling(10, 20);
bill3.calculateTotal();

console.log(bill1);
console.log(bill2);
console.log(bill3);
