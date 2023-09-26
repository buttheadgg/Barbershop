const navItems = document.querySelectorAll('.nav-item');

let verticalSlider = new Swiper('.wrapper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: "vertical",
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});

new Swiper('.image-slider',{
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
  },
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  effect: 'coverflow',
  coverflowEffect:{
    modifier: 0,
    rotate: 0,
    slideShadows: true,
  },
  spaceBeetwen: 0,
  speed: 400,
  autoplay: {
    stopOnLastSlide: true,
    disableOnInteraction: false
},
breakpoints: {
    768:{
      slidePerView: 'auto'
    },
}
});

const clearClasses = () => {
    const items = document.querySelectorAll('.nav-item');
    items.forEach((item) => {
        item.classList.remove('nav__item--active')
    })
}

const ChangeSlideTo = (e, slide, speed = 500) => {
    verticalSlider.slideTo(slide, speed);
}

navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        ChangeSlideTo(e, index);
    })
})

verticalSlider.on('slideChange', (slide) => {
    clearClasses();
    navItems[slide.activeIndex].classList.add('nav__item--active');
})

document.querySelector('.burger').addEventListener('click',function() {
  this.classList.toggle('active');
  document.querySelector('.scroll-container').classList.toggle('open');
})
