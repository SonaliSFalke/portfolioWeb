// owl carousel   
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
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