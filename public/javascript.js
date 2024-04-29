//code for sliding search bar
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    //searchForm.classList.toggle('active');

    //only activating search btn
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//code for sliding cart bar
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    //shoppingCart.classList.toggle('active');

    
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//code for sliding login btn
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    //loginForm.classList.toggle('active');

    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

//code to slide menu bar in mobile screen
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    //navbar.classList.toggle('active');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
  
}

//automatic de activing item after  activating
window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//code from swiper js.com to slide the images in product

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  //code for categories

  
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

