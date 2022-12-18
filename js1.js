const swiper = new Swiper('.swiper', {
    // jar aaplyala auto lavaych asel tr
    // autoplay : {
    //     delay : 10000,
    //     disableOnInteraction : false,
    // },
    
    loop: true,
  
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable : true,
    // },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });

var come1 = document.getElementById("come1")
come1.addEventListener("click", () =>{
  confirm("You want to logout")
})
