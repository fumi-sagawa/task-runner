import { hello } from "./_module/sub.js";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

hello();

const swiper = new Swiper(".swiper-container", {
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
