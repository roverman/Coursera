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



//project page loading
$(window).on('load', function () {
$('#loader').hide();
});







$("#usd-button").on("click", function transCurrency() {
    console.log("working");
    var UsdAmount = document.getElementById("USD").value;
    var Percentage = document.getElementById("Perc").value;
    var JpyAmount = UsdAmount*147.695*Percentage/100;
    var RmbAmount = UsdAmount*7.24*Percentage/100;
    var PoundAmount = UsdAmount*0.88*Percentage/100;
    var EuroAmount = UsdAmount*1.01*Percentage/100;
    var NewUsdAmount = UsdAmount*Percentage/100;
    document.getElementById("NewUSD").placeholder = Number(NewUsdAmount.toFixed(0)).toLocaleString();
    document.getElementById("JPY").placeholder = Number(JpyAmount.toFixed(0)).toLocaleString();
    document.getElementById("RMB").placeholder = Number(RmbAmount.toFixed(0)).toLocaleString();
    document.getElementById("POUND").placeholder = Number(PoundAmount.toFixed(0)).toLocaleString();
    document.getElementById("EURO").placeholder = Number(EuroAmount.toFixed(0)).toLocaleString();
    });















