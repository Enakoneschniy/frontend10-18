'use strict';

let rooms = [
    [11, 21, 31, 41],
    [12, 22, 32, 42],
    [13, 23, 33, 43],
    [14, 24, 34, 44]
];
console.log(rooms);
let row3 = rooms[2]; // row3 = [13, 23, 33, 43]
console.log(row3[3]); // 43
console.log(rooms[2][3]); // 43

/*for(let roomNum in rooms) {
    console.log(`Room ${roomNum}:`);
    for(let userName of rooms[roomNum]) {
        console.log(`Hello ${userName}!`);
    }
}*/

let phone = {
    title: 'Iphone 8',
    price: 234,
    color: 'red',
    "test-property": 2345,
    relatedProducts: [
        {
            title: "Чехол",
            price: 234
        }
    ]

};
phone.memory = '64gb';
phone['fake-memory'] = '128gb';
console.log(phone);
console.log(phone['title']);
console.log(phone.title);
console.log(phone["test-property"]);
for(let prop in phone) {
    console.log(prop);
}
console.log(Object.keys(phone));
console.log(Object.values(phone));
for(let prop of Object.values(phone)) {
    console.log(prop);
}

const phones = [
    {
        title: 'Iphone X',
        price: 345,
        color: 'black',
        accessories: [
            {
                title: 'Чехол',
                price: 44
            },
            {
                title: 'Наушники',
                price: 43
            }
        ]
    },
    {
        title: 'Samsung Galaxy Note 9',
        price: 453,
        color: 'blue'
    },
    {
        title: 'Samsung Galaxy S9',
        price: 757,
        color: 'yellow'
    }
];

console.log(phones);

for(let phone of phones) {
    console.log(phone.title, phone.price);
}

let cities = [
    {
        name: 'Kharkiv',
        country: 'Ukraine'
    },
    {
        name: 'Kiev',
        country: 'Ukraine'
    },
    {
        name: 'New York',
        country: 'USA'
    }
];

let countries = {};

for(let city of cities) {
    if(!countries.hasOwnProperty(city.country)) {
        countries[city.country] = [city.name];
    } else {
        countries[city.country].push(city.name);
    }
}
console.log(countries);


for(let phone of phones) {
    console.log(phone.title);
    if(phone.hasOwnProperty('accessories')) {
        for(let acc of phone.accessories) {
            console.log('      ', acc.title);
        }
    }
}

