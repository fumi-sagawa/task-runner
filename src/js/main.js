import { hello } from "./_module/sub.js";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

hello();

// https://takblog.site/web/?p=593
//swiperの解除
const swiperSlides = document.getElementsByClassName("swiper-slide");
const breakPoint = 768;
let mySwiper;
let mySwiperFlag;

const createSwiper = () => {
  mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto", //必須
    centeredSlides: true, //1枚目のスライド中央配置
    spaceBetween: 15, //スライド間の余白
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
};

window.addEventListener(
  "load",
  () => {
    if (breakPoint < window.innerWidth) {
      mySwiperFlag = false;
    } else {
      createSwiper();
      mySwiperFlag = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (breakPoint < window.innerWidth && mySwiperFlag) {
      mySwiper.destroy(false, true);
      mySwiperFlag = false;
    } else if (breakPoint >= window.innerWidth && !mySwiperFlag) {
      createSwiper();
      mySwiperFlag = true;
    }
  },
  false
);

// const swiper = new Swiper(".swiper-container", {
//   loop: true,
//   slidesPerView: "auto", //必須
//   centeredSlides: true, //1枚目のスライド中央配置
//   spaceBetween: 15, //スライド間の余白
//   autoplay: {
//     delay: 4000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
// });
