(() => {
    'use strict';

    const links = [].slice.call(document.querySelectorAll('a'));
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const href = event.target.getAttribute('href');
            if (confirm('Перейти по ссылке?')) {
                open(href);
            }
        });
    });

    const main = document.querySelector('.main');

    main.addEventListener('click', event => {
        console.log(event.target.tagName);
        if(event.target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            if (confirm('Перейти по ссылке?')) {
                open(href);
            }
        }
    });

     function factorial(num) {
         if (num <= 1) {
             return 1;
         }
         return num * factorial(num - 1);
     }

    console.log(factorial(5));

     function a() {
         b();
     }
     function b() {
         a();
     }
     const nodes = [
         {
             name: 'fold1',
             files: [],
             dirs: [
                 {
                     name: 'fold2',
                     files: [],
                     dirs: []
                 }
             ]
         },
         {
             name: 'fold1',
             files: [],
             dirs: [
                 {
                     name: 'fold2',
                     files: [],
                     dirs: []
                 }
             ]
         }
     ];

    function sum(num) { //1234
        // return 10;
    }
})();