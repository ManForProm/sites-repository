import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { ComponentLoader } from "./ComponentLoader.js";

const swiper = new Swiper('.swaper__wrapper', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween:1,
  slidesPerView:"auto",
  wrapperClass:'catigories__list',
  slideClass:'catigories__item',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const componentLoader = new ComponentLoader();

const videoList = document.getElementById('videoList');
componentLoader.loadComponent('../subpackages/video-item.html', videoList);


document.querySelector('.header__input').addEventListener('click', function() {
    // const headerSearch = document.querySelector('.header__search')
    this.classList.add('active');
});

document.querySelector('.search__textfield-input').addEventListener('blur', function() {
    document.querySelector('.header__input').classList.remove('active');
});

const categoriesItems = document.querySelectorAll('.catigories__item');
categoriesItems.forEach(item => {
    item.addEventListener('click', function() {
        categoriesItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});