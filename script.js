$(".btn").mouseup(function(){
    $(this).blur();
})


$("#copy-promo-button").on("click", function copyToClipboard() {
    var promoCode = document.querySelector("#promo-code");
    console.log(promoCode.value);
    navigator.clipboard.writeText(promoCode.value);
    alert("Promo Code '" + promoCode.value + "' Copied");
});
// do not touch the code above





//hide nav bar on scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".navbar").style.top = "0";
//   } else {
//     document.querySelector(".navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


console.log(window.innerHeight);
console.log(window.innerWidth);



//!!!For amazing scroll full vh navbar hide
// $(window).scroll(function() {
//   if ($(document).scrollTop() > window.innerHeight-40  ) {
//     $('nav').removeClass('my-bg-transparent');
//     $('nav').addClass('my-bg-dark');
//   } 
//   else {
//     $('nav').addClass('my-bg-transparent');
//     $('nav').removeClass('my-bg-dark');
//   }
// });
$(window).scroll(function() {
  if ($(document).scrollTop() > 40  ) {
    $('nav.smart').removeClass('my-bg-transparent');
    $('nav.smart').addClass('my-bg-dark');
  } 
  else {
    $('nav.smart').addClass('my-bg-transparent');
    $('nav.smart').removeClass('my-bg-dark');
  }
});




//password verification
console.log("Welcome my friend!");

$("#submitPassword").on("click", function validatePassword() {
    var getPassword = document.querySelector("#inputPassword").value;
    console.log(getPassword);
    var A = "w";
    var B = "t";
    var C = ["5","1","2"];
    if (getPassword == A+B+(C[1]+11)*6) {
        console.log("Password correct!");
        // window.location.href = "index.html";
        console.log("hahha");
        // document.querySelector("#loader").classList.remove("invisible");
        // window.location.href = "index.html";
        setTimeout(function() {
            window.location.href = "myhousing.html";
        }, 0);
    }
    else {
        console.log("Password Wrong!");
        document.querySelector("#inputPassword").classList.add("border-danger");
        document.querySelector("#passwordAlert").classList.remove("invisible");
        setTimeout(function() {
            document.querySelector("#inputPassword").classList.remove("border-danger");
        }, 1000);
        setTimeout(function() {
            document.querySelector("#passwordAlert").classList.add("invisible");
        }, 1000);
    };
});



//project page loading
$(window).on('load', function () {
$('#loader').hide();
});





// table of content nav start
// const sections = document.querySelectorAll("section");

// const navLi = document.querySelectorAll("nav .container ul li");

// document.onscroll = () => {
//   var current = "";


//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;

//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };
// table of content nav end

// table of content nav start
const mains = document.querySelectorAll("main");

const navLi = document.querySelectorAll("nav .container ul li");

document.onscroll = () => {
  var current = "";


  mains.forEach((main) => {
    const mainTop = main.offsetTop;

    if (pageYOffset >= mainTop - 300) {
      current = main.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
// table of content nav end 70 was the mainTop -








// Testing out animations for homepage start!!!!!!!
// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
       var $animatable = $(this);
            // if (($animatable.offset().top + $animatable.height() - 0.7*$(window).height()) < offset) {
            if (($animatable.offset().top + 0.1*$(window).height()) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
// Testing out animations for homepage end!!!!!!!







// Adding fadeInUp animation to all sections start!!!!!!!
$allSectionDiv = $('main section.bg-white>div');
$allSectionDiv2 = $('main section.bg-dark>div');
$carouselItems = $('main section.bg-white div.carousel-item');

$allSectionDiv.addClass("animatable fadeInUp");
$allSectionDiv2.addClass("animatable fadeInUp");
$carouselItems.removeClass("animatable fadeInUp");
// Adding fadeInUp animation to all sections end!!!!!!!







// image pop start
$(function() {
        $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            var newModalTitle = $(this).find('img').attr('alt');
            document.querySelector('.modal-title').textContent = newModalTitle;
            $('#imagemodal').modal('show');  
        });     
});
// image pop end



// inject footer message start
$(document).ready(function(){
    $('footer').append("<p>" + "&copy 2022 Wei Tang, All Rights Reserved. Designed and Coded with Love." + "</p>");
});
// inject footer message end









// display project TOC nav start
var $tocItems = $(".toc-item");
var $tocSections = $(".toc-section");

// $tocItems.addClass("d-inline-block d-md-none");
// $tocSections.addClass("d-none d-md-block");
// display project TOC nav end








// count number animation start
    // $('.count').each(function () {
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 2000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
// count number animation end






//inlucding html to html, could be buggy!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(function(){
    $("#my-footer").load("footer.html"); 
});

//video playback speed for highlights
document.querySelector('#vid-speed').playbackRate = 1.50;

//background video playback speed adjustment
document.querySelector('#bg-vid').playbackRate = 0.8;




