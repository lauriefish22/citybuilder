/* Imports */

/* Get DOM Elements */
const italianDropdown = document.getElementById('italian-dd');
const mexicanDropdown = document.getElementById('mexican-dd');
const chineseDropdown = document.getElementById('chinese-dd');
const italianImage = document.getElementById('italian-img');
const mexicanImage = document.getElementById('mexican-img');
const chineseImage = document.getElementById('chinese-img');

const italianCountEl = document.getElementById('italian-count');
const mexicanCountEl = document.getElementById('mexican-count');
const chineseCountEl = document.getElementById('chinese-count');

const inputEl = document.getElementById('text');
const buttonEl = document.getElementById('my-button');

/* State */
let italianCount = 0;
let mexicanCount = 0;
let chineseCount = 0;
let text = [];
// needs HTML spans.

/* Events */
italianDropdown.addEventListener('change', () => {
    italianImage.src = `assets/Italian-${italianDropdown.value}.png`;
    italianCount++;

    displayStats();
});

mexicanDropdown.addEventListener('change', () => {
    mexicanImage.src = `assets/Mexican-${mexicanDropdown.value}.png`;
    mexicanCount++;

    displayStats();
});

chineseDropdown.addEventListener('change', () => {
    chineseImage.src = `assets/Chinese-${chineseDropdown.value}.png`;
    chineseCount++;

    displayStats();
});

buttonEl.addEventListener('click', () => {
    text.push(inputEl.value);

    const newElement = document.createElement('p');

    newElement.classList.add('text');
    newElement.textContent = inputEl.value;

    inputEl.append(newElement);
});

inputEl.value = '';

/* Display Functions */
function displayStats() {
    mexicanCountEl.textContent = mexicanCount;
    chineseCountEl.textContent = chineseCount;
    italianCountEl.textContent = italianCount;
}

// (don't forget to call any display functions you want to run on page load!)
