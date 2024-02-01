'use strict';

const lang = document.querySelector('.lang');
const langImg = document.querySelector('.lang__default-img');
const langText = document.querySelector('.lang__default-text');
const langList = document.querySelector('.lang__list');
const langItems = document.querySelectorAll('.lang__item');

// Language Select
lang.addEventListener('click', () => {
  langList.classList.toggle('lang__show');
});

langItems.forEach(el => {
  el.addEventListener('click', e => {
    const img = e.currentTarget.querySelector('img');
    const text = e.currentTarget.querySelector('.lang__text');

    langImg.src = img.src;
    langText.innerHTML = text.innerHTML;
  });
});
