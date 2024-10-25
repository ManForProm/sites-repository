
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function createSlider(options){
    new Swiper('.content__list-catigories', {
        direction: 'vertical',
        loop: true,
        speed: 400,
        wrapperClass:'catigories__list',
        slideClass:'catigories__item',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
}
