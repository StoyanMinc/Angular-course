class Car {
    model: string = '';
    color: string = '';

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }
}

class Wallet {
    balance: number = 0;

    constructor(balance: number) {
        this.balance = balance;
    }
}

//* Bad way
class BadClassPerson {
    name: string = '';
    wallet: Wallet;
    car: Car;
    constructor(name: string) {
        this.name = name;
        this.wallet = new Wallet(1000); //! never make instanse inside the constructor
        this.car = new Car('Toyota', 'Red'); //! never make instanse inside the constructor
    }
}
const badPerson = new BadClassPerson('Georgi');

//* Good way
class GoodClassPerson {
    name: string = '';
    
    constructor(name: string, public wallet: Wallet, public car: Car) {
        this.name = name;
        this.wallet = wallet;
        this.car = car;
    }
}
const goodPerson = new GoodClassPerson('Maria', new Wallet(1000), new Car('Toyota', 'Red'));
const person3 = new GoodClassPerson('Stoyan', new Wallet(0), new Car('Toyota', 'Red'));