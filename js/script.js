// Loader animation
let loader = document.querySelector('#loader');

setTimeout(() => {
  loader.style.top = '-120%';
}, 4000);

// Lenis js
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothTouch: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Swiper js
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4, // desktop
    },
  },
});

// Project section
let projectContent = document.querySelectorAll('.project-content');
let projectImg = document.querySelector('.project-img');

projectContent.forEach((e) => {
  e.addEventListener('mouseover', () => {
    let getImg = e.getAttribute('data-img');
    projectImg.src = getImg;
    projectImg.style.display = 'block';
  });
  e.addEventListener('mouseout', () => {
    projectImg.style.display = 'none';
  });
});

// Design section
let tabButton = document.querySelectorAll('.tab-btn');
let tabText = document.querySelectorAll('.tab-text');
let designImg = document.querySelectorAll('.design-img');

tabButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    // This code for tab
    tabButton.forEach((btn) => btn.classList.remove('tab-active'));
    button.classList.add('tab-active');
    // This code for text
    tabText.forEach((txt) => txt.classList.remove('text-show'));
    tabText[index].classList.add('text-show');
    // This code for img
    designImg.forEach((img) => img.classList.remove('img-show'));
    designImg[index].classList.add('img-show');
  });
});
