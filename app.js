/* Imports */

/* Get DOM Elements */
const italianDropdown = document.getElementById('italian-dd');
const inputEl = document.getElementById('text-box');
const buttonEl = document.getElementById('my-button');
const italianImage = document.getElementById('italian-img');
/* State */

/* Events */
italianDropdown.addEventListener('change', () => {
    italianImage.src = `assets/Italian-${italianDropdown.value}.jpg`;
});

buttonEl.addEventListener('click', () => {});

inputEl.value = '';

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
