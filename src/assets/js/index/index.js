var mySwiperone = new Swiper ('.swiper-container-one ', {
        direction: 'horizontal', //horizontal：横向切换  vertical:纵向切换
        loop: true,
        autoplay: {
         delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
         pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

var mySwipertwo = new Swiper ('.swiper-container-two ', {
         pagination: {
        el: '.swiper-pagination-two',
        
      }
    });