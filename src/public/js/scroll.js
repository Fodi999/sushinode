"use strict";
const cardContainer = document.getElementById('card-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
if (cardContainer && prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        cardContainer.scrollBy({ left: -cardContainer.clientWidth, behavior: 'smooth' });
    });
    nextButton.addEventListener('click', () => {
        cardContainer.scrollBy({ left: cardContainer.clientWidth, behavior: 'smooth' });
    });
}