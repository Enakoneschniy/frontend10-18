(() => {
    'use strict';

    Array.prototype.sum = function () {
        return this.reduce((acc, current) => acc += current, 0);
    };

    console.log([1, 2, 3, 4, 5].sum());

    Number.prototype.format = function (currency = 'USD') {
        return `${this} ${currency}`;
    };

   /* console.log((456).format());
    let price = 0x1c8;
    price.format('EUR');
    console.log(price.toString(10));*/

   function fullInfo() {
       return `Name: ${this.name}, Weight: ${this.weight}, Gender: ${this.gender}.`;
   }

    class Animal {
        constructor({ name = 'No name', weight = 0, gender = 'male' } = {}) {
            this.name = name;
            this.weight = weight;
            this.gender = gender;
        }
        sayHello() {
            console.log(`Hello! ${fullInfo.bind(this)()}`);
        }
    }

    const animal = new Animal();
    console.log(animal);
    animal.sayHello();
    function foo(callback) {
        callback();
    }

    foo(function () {
        console.log(this);
    }.bind(animal));

})();





