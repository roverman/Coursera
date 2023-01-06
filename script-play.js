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







// $("#usd-button").on("click", function transCurrency() {
//     console.log("working");
//     var UsdAmount = document.getElementById("USD").value;
//     var Percentage = document.getElementById("Perc").value;
//     var JpyAmount = UsdAmount*147.695*Percentage/100;
//     var RmbAmount = UsdAmount*7.24*Percentage/100;
//     var PoundAmount = UsdAmount*0.88*Percentage/100;
//     var EuroAmount = UsdAmount*1.01*Percentage/100;
//     var NewUsdAmount = UsdAmount*Percentage/100;
//     document.getElementById("NewUSD").placeholder = Number(NewUsdAmount.toFixed(0)).toLocaleString();
//     document.getElementById("JPY").placeholder = Number(JpyAmount.toFixed(0)).toLocaleString();
//     document.getElementById("RMB").placeholder = Number(RmbAmount.toFixed(0)).toLocaleString();
//     document.getElementById("POUND").placeholder = Number(PoundAmount.toFixed(0)).toLocaleString();
//     document.getElementById("EURO").placeholder = Number(EuroAmount.toFixed(0)).toLocaleString();
//     });




var rmbRequestURL = 'https://api.exchangerate.host/convert?from='+'USD' + '&to=' + 'CNY';
var rmbRequest = new XMLHttpRequest();
rmbRequest.open('GET', rmbRequestURL);
rmbRequest.responseType = 'json';
rmbRequest.send();

rmbRequest.onload = function() {
  var rmbResponse = rmbRequest.response;
  rmbExchangeRate = rmbResponse.info.rate;
  console.log(rmbExchangeRate);
  document.getElementById("RMB").placeholder = Number(rmbExchangeRate.toFixed(2)).toLocaleString();
}




var jpyRequestURL = 'https://api.exchangerate.host/convert?from='+'USD' + '&to=' + 'JPY';
var jpyRequest = new XMLHttpRequest();
jpyRequest.open('GET', jpyRequestURL);
jpyRequest.responseType = 'json';
jpyRequest.send();

jpyRequest.onload = function() {
  var jpyResponse = jpyRequest.response;
  jpyExchangeRate = jpyResponse.info.rate;
  console.log(jpyExchangeRate);
  document.getElementById("JPY").placeholder = Number(jpyExchangeRate.toFixed(2)).toLocaleString();
}



var gbpRequestURL = 'https://api.exchangerate.host/convert?from='+'USD' + '&to=' + 'GBP';
var gbpRequest = new XMLHttpRequest();
gbpRequest.open('GET', gbpRequestURL);
gbpRequest.responseType = 'json';
gbpRequest.send();

gbpRequest.onload = function() {
  var gbpResponse = gbpRequest.response;
  gbpExchangeRate = gbpResponse.info.rate;
  console.log(gbpExchangeRate);
  document.getElementById("POUND").placeholder = Number(gbpExchangeRate.toFixed(2)).toLocaleString();
}



var eurRequestURL = 'https://api.exchangerate.host/convert?from='+'USD' + '&to=' + 'EUR';
var eurRequest = new XMLHttpRequest();
eurRequest.open('GET', eurRequestURL);
eurRequest.responseType = 'json';
eurRequest.send();

eurRequest.onload = function() {
  var eurResponse = eurRequest.response;
  eurExchangeRate = eurResponse.info.rate;
  console.log(eurExchangeRate);
  document.getElementById("EURO").placeholder = Number(eurExchangeRate.toFixed(2)).toLocaleString();
}






$("#usd-button").on("click", function transCurrency() {
    console.log("working");
    var UsdAmount = document.getElementById("USD").value;
    var Percentage = document.getElementById("Perc").value;
    var NewUsdAmount = UsdAmount*Percentage/100;

    var JpyAmount = UsdAmount*jpyExchangeRate*Percentage/100;
    var RmbAmount = UsdAmount*rmbExchangeRate*Percentage/100;
    var PoundAmount = UsdAmount*gbpExchangeRate*Percentage/100;
    var EuroAmount = UsdAmount*eurExchangeRate*Percentage/100;

    document.getElementById("NewUSD").placeholder = Number(NewUsdAmount.toFixed(0)).toLocaleString();
    document.getElementById("JPY").placeholder = Number(JpyAmount.toFixed(0)).toLocaleString();
    document.getElementById("RMB").placeholder = Number(RmbAmount.toFixed(0)).toLocaleString();
    document.getElementById("POUND").placeholder = Number(PoundAmount.toFixed(0)).toLocaleString();
    document.getElementById("EURO").placeholder = Number(EuroAmount.toFixed(0)).toLocaleString();
    });









