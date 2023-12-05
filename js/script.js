function changeTab(tabId) {
  
  var exhibitions = document.querySelectorAll('.products-exhibition');
  for (var i = 0; i < exhibitions.length; i++) {
      exhibitions[i].classList.remove('active-exhibition');
  }

  var selectedExhibition = document.getElementById(tabId);
  selectedExhibition.classList.add('active-exhibition');

  console.log('Tab changed to:', tabId);
}

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      speed: 2000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 2000)}s`;
        }
      }
});

// 초기에 페이지 로딩 시 이미지 업데이트
updateImages();

// 뷰포트 크기가 변경될 때마다 updateImages 함수 호출
window.addEventListener('resize', function() {
  updateImages();
});

function updateImages() {
  if (window.innerWidth <= 375) {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/375_1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/375_2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/375_3.jpg';
  } else if (window.innerWidth <= 500) {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/500_1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/500_2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/500_3.jpg';
  } else if (window.innerWidth <= 800) {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/800_1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/800_2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/800_3.jpg';
  } else if (window.innerWidth <= 1200) {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/1200_1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/1200_2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/1200_3.jpg';
  } else if (window.innerWidth <= 1650) {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/1650_1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/1650_2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/1650_3.jpg';
  } else {
    document.querySelector('.mySwiper .swiper-slide:nth-child(1) img').src = './jordan_coding/image/banner/sw1.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(2) img').src = './jordan_coding/image/banner/sw2.jpg';
    document.querySelector('.mySwiper .swiper-slide:nth-child(3) img').src = './jordan_coding/image/banner/sw3.jpg';
  }
}

const navbarBurger = document.querySelector('.navbar_burger');
  const navbarburgerback = document.querySelector('.navbar_burger_back');
  const navbarMenu = document.querySelector('.navbar_menu');
  const navbarOverlay = document.querySelector('.navbar_overlay');

  navbarBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarOverlay.classList.toggle('active');
  });

  navbarburgerback.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
  });

  navbarOverlay.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
  });

  var darkBackground = document.querySelector(".dark-background");
  var navbar = document.querySelector(".navbar_main");

  function handleNavbarScroll1() {
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    var darkBackgroundHeight = darkBackground.offsetHeight;
    var darkBackgroundTop = darkBackground.offsetTop;

    var triggerPosition1 = darkBackgroundTop + (darkBackgroundHeight * 0.9);

    if (scrollPosition >= triggerPosition1) {
      navbar.classList.add("navbar_scroll");
    } else {
      navbar.classList.remove("navbar_scroll");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll1);
  window.addEventListener("resize", handleNavbarScroll1);
  

// function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
