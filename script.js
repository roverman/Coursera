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
            window.location.href = "geolink-reports-secured.html";
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


//background video playback speed adjustment
document.querySelector('video').playbackRate = 0.3;


//inlucding html to html
$(function(){
    $("#my-footer").load("footer.html"); 
});

//video playback speed for highlights
document.querySelector('#vid-speed').playbackRate = 1.50;
// document.querySelector('video').play();

