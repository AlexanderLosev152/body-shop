import './style.scss';
// import '../node_modules/swiper/swiper-bundle';
// console.log('hello vite');

// const btn = document.querySelector('.burger');
// const nav = document.querySelector('.nav');
// const links = document.querySelectorAll('.nav ul li a');

// btn.addEventListener('click', () => {
//   btn.classList.toggle('open');
//   nav.classList.toggle('open');

//   if (btn.classList.contains('open')) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   }
// });

// links.forEach((el) => {
//   el.addEventListener('click', () => {
//     btn.classList.remove('open');
//     nav.classList.remove('open');
//     document.body.style.overflow = '';
//   });
// });

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.services__button-next',
    prevEl: '.services__button-prev',
  },
});
