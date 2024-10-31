"use strict";

class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }

  set setRun(run) {
    this.#run = run;
  }

  get getRun() {
    return this.#run;
  }

  info() {
    return console.log(`${this.#make} ${this.#model} ${this.#run}`);
  }
}

const car1 = new Car("lada", "2110", "100");
console.log(car1);
car1.info();
console.log(car1.getRun);
car1.setRun = 20000;
car1.info();
