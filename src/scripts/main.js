'use strict';

/* global Swiper */

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line no-new
  new Swiper('.categories__swiper', {
    navigation: {
      nextEl: '.categories__slider-btn--next',
      prevEl: '.categories__slider-btn--prev',
    },
    autoHeight: true,
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 32,
    breakpoints: {
      320: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },
      760: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
});

// Mobile menu
const nav = document.querySelector('.nav');
const burger = document.querySelector('#burger');
const cross = document.querySelector('#nav-cross');
const navItems = document.querySelectorAll('.nav__item');

function toggleMobMenu() {
  nav.classList.toggle('header__nav--active');
}

burger.addEventListener('click', toggleMobMenu);

cross.addEventListener('click', toggleMobMenu);

function closeMobileMenu() {
  nav.classList.remove('header__nav--active');
}

navItems.forEach(function(item) {
  item.addEventListener('click', closeMobileMenu);
});

// Categories hover
const categories = document.querySelectorAll('.categories__card');

categories.forEach(el => {
  el.addEventListener('mouseover', () => {
    el.firstElementChild.classList.add('categories__card-text-wrapper--active');
  });

  el.addEventListener('mouseleave', () => {
    el.firstElementChild.classList
      .remove('categories__card-text-wrapper--active');
  });
});

const inputs = document.querySelectorAll('.popup__field');

for (const el of inputs) {
  el.insertAdjacentHTML('beforebegin', `
    <label class="popup__label" for="${el.id}">
      ${normalize(el.name)}
    </label>
  `);
  el.placeholder = normalize(el.name);
}

function normalize(item) {
  const word = item.split(/(?=[A-Z])/).join(' ');

  return word[0].toUpperCase() + word.slice(1);
}

// Login popup

document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  const loginPopup = document.getElementById('loginPopup');
  const closePopup = document.getElementById('closePopup');
  const loginForm = document.getElementById('loginForm');

  loginButton.addEventListener('click', function() {
    loginPopup.style.display = 'flex';
  });

  closePopup.addEventListener('click', function() {
    loginPopup.style.display = 'none';
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginForm.reset();
    loginPopup.style.display = 'none';
  });
});

// Register popup

document.addEventListener('DOMContentLoaded', function() {
  const registerButton = document.getElementById('registerButton');
  const registerPopup = document.getElementById('registerPopup');
  const closeRegisterPopup = document.getElementById('closeRegisterPopup');
  const registerForm = document.getElementById('registerForm');

  registerButton.addEventListener('click', function() {
    registerPopup.style.display = 'flex';
  });

  closeRegisterPopup.addEventListener('click', function() {
    registerPopup.style.display = 'none';
  });

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    registerForm.reset();
    registerPopup.style.display = 'none';
  });
});
