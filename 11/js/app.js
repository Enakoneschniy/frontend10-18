(() => {
    'use strict';

  /*  let a = 34;
    let b = 56;*/

    let [a, b, ...other] = [12, 45, 434, 34, 86];
    console.log(a, b, other);

    let { x, y, ...obj } = { x: 1, y: 3, c: 34, m: '3sdf' };

    function sumAll(...args) {
        return args.reduce((sum, arg) => sum += arg, 0);
    }
    sumAll(2, 3, 4, 5);

    function foo({a, b}) {
        return {
            sum: a + b,
            mul: a * b
        }
    }
    let { sum, mul } = foo({ a: 4, b: 4 });
    console.log(sum, mul);

    let obj1 = {
        a: 1,
        b: 2
    };

    let obj2 = {
        sum,
        ...obj1,
        x: 4
    };
    console.log(obj2);
    let testObj = Object.assign({}, obj2, { f: 3 });
    console.log(testObj);

    function f1() {
        console.log(this);
    }
    f1();

    let user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        age: 23,
        fullName() {

            const upper = () => {
                return `${ this.firstName.toUpperCase() } ${ this.lastName.toUpperCase() }`;
            };
            [1, 3, 4, 5].forEach((item) => {
                console.log(item + this.age);
            });
            return upper();
        }
    };
    console.log(user.fullName());

    function Cat({ name, color, gender }) {
        let age = 0;
        return {
            name,
            color,
            getGender() {
                return gender;
            },
            setName(value) {
                this.name = value;
            },
            getAge() {
                return age;
            }
        };

    }

    function Dog() {

    }

    let byte = new Cat({ name: 'Пушистик', color: 'yellow', gender: 'male' });
    let sharik = new Dog();
    console.log(byte);

    byte.name = 'Мурка';
    console.log(byte);
    console.log(byte.gender);
    console.log(byte);
    console.log(byte.getGender());
    console.log(sharik);



    function Basket() {
        const items = [];
        return { add, remove, show };

        function toJSON(items) {
            return JSON.stringify(items)
        }
        function show() {
            console.log(toJSON(items));
        }
        function add(product) {
            items.push(product);
        }
        function remove(id) {
            // to do
        }
    }

    const basket = new Basket();
    console.log(basket);

    basket.add({
        title: 'Phone 1'
    });
    basket.show();

    basket.add({
        title: 'Phone 2'
    });
    basket.show();
})();









