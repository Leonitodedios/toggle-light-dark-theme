'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    const isLightTheme = document.body.classList.contains('light-theme');
    this.textContent = isLightTheme ? 'Dark' : 'Light';

    console.log('Current class name: ' + document.body.className);
});