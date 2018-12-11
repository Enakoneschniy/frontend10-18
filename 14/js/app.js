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

})();