let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// search section

document.querySelector('#search_bar').onclick = () =>{

    document.querySelector('#search_from').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{

    document.querySelector('#search_from').classList.remove('active');
}

// swiper home slide

var swiper = new Swiper(".home_main", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop:true
    
  });