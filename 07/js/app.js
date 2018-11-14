'use strict';

let auth = false;

if (auth) {
    console.log('Auth');
} else {
    console.log('Not Auth');
}

let age = 19;

if (age >= 18) {
    console.log('Welcome!');
} else {
    console.log('Access Denied');
}

if (age === '19') {
    console.log(age);
}

if (age !== 18) {
    console.log('Not', age);
}

// null, '', undefined === false
if (!!age) {
    // to do
}

if (age >= 18 && age < 21) {

    if(age === 18) {
        console.log('Проверить документы!');

        let documents = true;

        if (documents) {
            console.log('Можно продать пиво!');
        }
    } else {
        console.log('Можно продать пиво!');
    }
    let documents = false;
} else if (age >= 21) {
    console.log('Можно продать пиво и водку!');
} else {
    console.log('Нельзя продать пиво и водку!');
}


if ((age === 18 || age === 21) && age < 21) {
    console.log('Проверить документы!');
}

let dayNum = 1;

switch (dayNum) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default: console.log('Такого дня не существует!');
}

switch (dayNum) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Рабочие дни');
        break;
    case 6:
    case 7:
        console.log('Выходные');
        break;
    default: console.log('Такого дня не существует!');
}
switch (true) {
    case (age > 18):
        // to do
        break;
    case (age < 18):
        // to do
        break;
}
let foo = false;
if (!foo) {
    console.log('FALSE!');
} else {
    console.log('TRUE!');
}

let c;
let f = c || 'hello';

let message = '';

if (age >= 18) {
    message = 'Можно продать пиво';
} else {
    message = 'Нельзя продать пиво';
}
console.log(message);

let msg = (age >= 18 && age < 21) ? 'Можно продать пиво' : 'Нельзя продать пиво';
console.log(msg);

{
    let a = 'sfdfg';
}
{
    let a = 'asdfaasdasd';

    {
        let a = 'fgfgggg';
    }

    console.log(a);
}







