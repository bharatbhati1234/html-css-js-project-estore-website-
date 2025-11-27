
// nav1_part2 Navbar Swiper------------------------------------------------

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
    delay: 3000,
    disableOnInteraction: false, 
  },
  loop: true, 
});



// navbar3 for mobile --------------------------------------------------


var mobilenav3 = document.querySelector('#mobilenav3')
var hamburgericon = document.querySelector('#hamburgericon')
var crossicon = document.querySelector('#crossicon')

hamburgericon.addEventListener('click',fun1);
function fun1(){
    hamburgericon.style.display='none'
    crossicon.style.display='block'
    mobilenav3.style.display='block'
}

crossicon.addEventListener('click',fun2);
function fun2(){
    hamburgericon.style.display='block'
    crossicon.style.display='none'
    mobilenav3.style.display='none'
}




// OnScroll Animation -----------------------------------------------------


  const srElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  srElements.forEach(el => observer.observe(el));



// Category Swiper -------------------------------------------------------------------------------------------------


var categorySwiper = new Swiper(".categorySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: { slidesPerView: 2 },
        480: { slidesPerView: 2.5 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
    }
});



// All, Clothing, Accessories, Electronics Section (Navs and Tabs)---------------------------------------------------------------------------------------------



function fun1(m,n){
   let button = document.querySelectorAll('.button');
  let product_display_section = document.querySelectorAll('.product_display_section')
  for(let i=0; i<product_display_section.length; i++){
    product_display_section[i].style.display="none"
    
  }

  for(let j=0; j<button.length; j++){
    button[j].style.color=" var(--default-color)";
    button[j].style.backgroundColor=" color-mix(in srgb, var(--default-color), transparent 95%)";
  }

  m.style.backgroundColor="var(--accent-color)";
  m.style.color="var(--contrast-color)";

  document.getElementById(n).style.display="flex";
  document.getElementById(n).classList.add("active");
 

}














































