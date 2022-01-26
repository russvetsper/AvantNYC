window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
  
    navbar.classList.toggle('sticky', window.scrollY >= 80);
  });
  
  // SLIDER
  let responsiveSlider = function () {
    let slider = document.getElementById('slider');
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById('sliderWrap');
    let items = slideList.querySelectorAll('li').length;
  
    let count = 0;
  
    let num = document.getElementById('num');
    slideNums = num.querySelectorAll('div');
  
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
  
    let addColor = function (pos) {
      slideNums[pos].style.boxShadow = '0 0 10px 2px rgb(196, 253, 255)';
      slideNums[pos].style.background = '#fff';
    };
  
    let removeColor = function (pos) {
      slideNums[pos].style.boxShadow = '0 0 10px 2px transparent';
      slideNums[pos].style.background = 'rgba(255, 255, 255, .3)';
    };
  
    addColor(0);
  
    slideNums[0].addEventListener('click', function () {
      removeColor(count);
      count = 0;
      addColor(count);
      slideList.style.left = '0px';
    });
    slideNums[1].addEventListener('click', function () {
      removeColor(count);
      count = 1;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    });
    slideNums[2].addEventListener('click', function () {
      removeColor(count);
      count = 2;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    });
    slideNums[3].addEventListener('click', function () {
      removeColor(count);
      count = 3;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    });
    slideNums[4].addEventListener('click', function () {
      removeColor(count);
      count = 4;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    });
  
    window.addEventListener('resize', function () {
      sliderWidth = slider.offsetWidth;
      slideList.style.left = '-' + count * sliderWidth + 'px';
    });
  
    let prevSlide = function () {
      removeColor(count);
      if (!count) count = items - 1;
      else count--;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    };
  
    let nextSlide = function () {
      removeColor(count);
      if (count == items - 1) count = 0;
      else count++;
      addColor(count);
      slideList.style.left = '-' + count * sliderWidth + 'px';
    };
  
    next.addEventListener('click', function () {
      nextSlide();
    });
  
    prev.addEventListener('click', function () {
      prevSlide();
    });
  
    setInterval(function () {
      nextSlide();
    }, 4000);
  };
  
  window.onload = function () {
    responsiveSlider();
  };
  
  // SLICK
  
  $(document).ready(function () {
    $('.products__container').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  
  //====================
  //   BURGER MENU
  //====================
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarContent = document.querySelectorAll('.sidebar__content')
    burger.addEventListener('click', () => {
      burger.classList.toggle('toggle');
      sidebar.classList.toggle('sidebar_active');
      // sidebarContent.forEach((link, index) => {
      //   if (link.style.animation) {
      //     link.style.animation = "";
      //   } else {
      //     link.style.animation = `sidebarFade 0.5s ease forwards ${
      //       index / 15 + 0.3
      //     }s`;
      //   }
      // });
    });
  };
  navSlide();