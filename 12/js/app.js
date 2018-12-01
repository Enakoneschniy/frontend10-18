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
    class User {
       constructor({ firstName = 'Vasya', lastName = 'Pupkin' } = {}) {
           this.firstName = firstName;
           this.lastName = lastName;
       }
       get fullName() {
           return `${this.firstName} ${this.lastName}`;
       }
       set fullName(value) {
            [this.firstName, this.lastName] = value.trim().split(' ');
       }
    }

    class Cat extends Animal {
        constructor({ name = 'No name', weight = 0, gender = 'male', age = 0 } = {}) {
            super({ name, weight, gender });
            this.age = age;
        }
    }

    const cat = new Cat({ name: 'Petya', weight: 15 });
    console.log(cat);


    const user = new User();
    console.log(user.fullName);
    user.fullName = `Ivan Ivanov`;
    console.log(user.fullName);
    console.log(user);
    const animal = new Animal();
    console.log(animal);
    animal.sayHello();
    function foo(callback) {
        callback();
    }

    foo(function () {
        console.log(this);
    }.bind(animal));

    class Product {
        constructor({
            title = 'Default title',
            description = 'Description',
            price = 0,
            quantity = 0,
            image = ''
        } = {}) {
            this.title = title;
            this.description = description;
            this.image = image;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Phone extends Product {
        constructor({
            title = 'Default title',
            description = 'Description',
            price = 0,
            quantity = 0,
            image = '',
            color = 'black',
            ram = 8,
            storage = 128
        } = {}) {
            super({title, description, price, quantity, image});
            this.storage = storage;
            this.ram = ram;
            this.color = color;
        }
    }

    class Wine extends Product {
        constructor({
            title = 'Default title',
            description = 'Description',
            price = 0,
            quantity = 0,
            image = '',
            volume = 1,
            alc = 13
        } = {}) {
            super({title, description, price, quantity, image});
            this.volume = volume;
            this.alc = alc;
        }
    }
})();





