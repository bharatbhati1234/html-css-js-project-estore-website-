
// nav1_part2 Navbar ------------------------------------------------

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




// onscroll animation -----------------------------------------------------


  const srElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  srElements.forEach(el => observer.observe(el));


















































