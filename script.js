//Sidemenu for responsive section -->
    
    var sidemenu = document.getElementById("sidemenu"); 

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
    responsive: {
        400: {
            items: 1
        },
        1000: {
            items: 2
        },
        1250: {
            items: 3
        }
    }
});

// for active 
// $("li").on("click", function(e){
//     $("ul li").removeClass("active");
//     $(this).addClass("active");
//   });
// //   active class

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('navLinks [href*=' + id  + ']').classList.add('active')
            })
        }

    })
}
