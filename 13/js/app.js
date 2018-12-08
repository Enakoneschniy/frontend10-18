(async () => {
    'use strict';

    function f1(a, b, callback) {
        setTimeout(function () {
            callback(a + b);
        }, 1000);
    }

    function f2(a, callback) {
        setTimeout(function () {
            callback(++a);
        }, 2000);

    }

    f1(5, 5, function (sum) {
        let f;
        console.log('f1-1');
        f2(sum, function (res) {
            console.log('f2-1');
            f1(res, 7, function (res) {
                console.log('f1-2');
                f = res;
            });
        });
        console.log(f);
    });


    function x1(a, b) {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               if (b === 0) {
                   reject('Ошибка! Деление на ноль!');
               }
               resolve(a / b);
           }, 1000);
        });
    }
    async function x2(a, b) {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum *= Math.sqrt(sum) + i;
        }
        return a / b;
    }

    async function x3() {
        const res = await x2(30, 3);
        console.log('Resolve 1: ', res);
    }
    // x3();
    x1(20, 2).then((res) => {
        console.log('Resolve 1: ', res);
        return x1(res, 2);
    }).then((res) => {
        console.log('Resolve 2: ', res);
        return res + 1;
    }).then((res) => {
        console.log('Resolve 3: ', res);
    });
    x1(10, 0).then((res) => {
        console.log('Resolve: ', res);
    }).catch((error) => {
        console.warn(error);
    });
    let res = await x1(20, 2);
    console.log('await 1: ', res);
    res = await x1(res, 2);
    console.log('await 2: ', res);

})();

(() => {
    'use strict';

    async function getProducts() {
        const response = await (await fetch('https://next.json-generator.com/api/json/get/E1ztOIgxb')).json();
        return response.map(item => {
            item.price = parseFloat(item.price);
            return item;
        });
    }
    function renderProducts(products) {
        const mainTag = document.getElementById('main');
        const productList = document.createElement('ul');
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
               <h2>${product.title}</h2>
               <span>Price: ${product.price} UAH</span>
               <button class="buy-btn" data-product="${product.id}">Buy</button>
            `;
            productList.appendChild(li);
        });
        mainTag.appendChild(productList);
    }
    function querySelectorAll(selector) {
        return [].slice.call(document.querySelectorAll(selector));
    }
    function setOnBuyClick() {
        const btns = querySelectorAll('.buy-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', onClick);
        });

    }
    function onClick(event) {
        const productId = event.target.getAttribute('data-product');
        addToBasket(productId);
        event.target.removeEventListener('click', onClick);
    }
    function addToBasket(id, quantity = 1) {
        alert(id);
    }
    async function main() {
        const products = await getProducts();
        renderProducts(products);
        setOnBuyClick();
    }
    main();

})();