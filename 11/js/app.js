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

})();









