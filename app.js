/* Imports */

/* Get DOM Elements */
const italianDropdown = document.getElementById('italian-dd');
const mexicanDropdown = document.getElementById('mexican-dd');
const chineseDropdown = document.getElementById('chinese-dd');
const inputEl = document.getElementById('text-box');
const buttonEl = document.getElementById('my-button');
const italianImage = document.getElementById('italian-img');
const mexicanImage = document.getElementById('mexican-img');
const chineseImage = document.getElementById('chinese-img');

/* State */
let italianCount = 0;
let mexicanCount = 0;
let chineseCount = 0;
// needs HTML spans.

/* Events */
italianDropdown.addEventListener('change', () => {
    italianImage.src = `assets/Italian-${italianDropdown.value}.png`;
});

mexicanDropdown.addEventListener('change', () => {
    mexicanImage.src = `assets/Mexican-${mexicanDropdown.value}.png`;
});

chineseDropdown.addEventListener('change', () => {
    chineseImage.src = `assets/Chinese-${chineseDropdown.value}.png`;
});

buttonEl.addEventListener('click', () => {});

inputEl.value = '';

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
//`assets/Italian-${italianDropdown.value}.png`;
