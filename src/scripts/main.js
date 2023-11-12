// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', (event) => {
  const slider = document.querySelector('.categories__cards-wrapper');
  const cardsContainer = document.querySelector('.cards__container');
  const cards = slider.querySelectorAll('.categories__card');
  const nextButton = document.querySelector('.categories__slider-btn--next');
  const prevButton = document.querySelector('.categories__slider-btn--prev');
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 32;
  let offset = 0;

  updateSlider();

  nextButton.addEventListener('click', function() {
    if (offset < (cards.length - 4) * (cardWidth + gap)) {
      offset += cardWidth + gap;
      updateSlider();
    }
  });

  prevButton.addEventListener('click', function() {
    if (offset > 0) {
      offset -= cardWidth + gap;
      updateSlider();
    }
  });

  function updateSlider() {
    cardsContainer.style.transform = `translateX(-${offset}px)`;
    checkButtons();
  }

  function checkButtons() {
    prevButton.disabled = offset === 0;
    nextButton.disabled = offset >= (cards.length - 4) * (cardWidth + gap);
  }
});

const nav = document.querySelector('.nav');
const burger = document.querySelector('#burger');
const cross = document.querySelector('#nav-cross');

burger.addEventListener('click', function() {
  nav.classList.toggle('header__nav--active');
});

cross.addEventListener('click', function() {
  nav.classList.toggle('header__nav--active');
});
