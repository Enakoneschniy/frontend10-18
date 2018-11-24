(function () {
    'use strict';

    function hello(name, age = 18, gender = 'male') {
        // age = age || 18;
        // console.log(`Hello ${name}, age: ${age}`);
        return `Hello ${name}, age: ${age}, gender: ${gender}`;
    }

    let test = hello(`Vasya`);
    console.log(test);

    function sum(a, b) {
        return a + b;
    }
    function sum1() {
        // console.log(arguments);
        let sum = 0;
        for (let index of arguments) {
            sum += index;
        }
        return sum;
    }

    const bar = function () {
        console.log('BAR!');
    };

    const notSum = sum;

    function test1(callback) {
        callback();
    }

    test1(bar);


    console.log('TEST!');

    function createFunc() {
        let c = 5;
        return function (a, b) {
            return a - b + c;
        }
    }
    const newFunc = createFunc();
    console.log(newFunc(5, 2));

    let arrayFunc = [
        function () {
            console.log('func 0')
        },
        function () {
            console.log('func 1')
        }
    ];
    arrayFunc[0]();
    arrayFunc[1]();

    const foo = a => a + 1;

    console.log(foo(2, 5));

    test1(() => console.log('123'));

    const user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    console.log(user.fullName());

    let array = [1, 2, 3, 4, 5, 6];
    let arr = array.slice();
    arr.push(12);
    console.log(arr);
    array = array.slice(0, 4);
    console.log(array);
    arr.splice(3, 2, 34, 5667);
    console.log(arr);
    arr.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });

    let newArr = arr.map(item => item * 2);
    console.log(newArr);
    let filteredArray = newArr.filter(item => item % 2 === 0);
    let someElement = newArr.find(item => item === 4);
    console.log(someElement);

    let sumArray = newArr.reduce((acc, curr) => acc += curr, 0);

})();











