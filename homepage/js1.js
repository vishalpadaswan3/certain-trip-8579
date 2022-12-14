const swiper = new Swiper('.swiper', {
    // jar aaplyala auto lavaych asel tr
    autoplay : {
        delay : 7000,
        disableOnInteraction : false,
    },
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });

