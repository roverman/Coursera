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
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//password page below
console.log("Welcome my friend!");

$("#submitPassword").on("click", function validatePassword() {
    var getPassword = document.querySelector("#inputPassword").value;
    console.log(getPassword);
    var A = "we";
    var B = "itan";
    var C = ["5","1","2"];
    if (getPassword == A+B+"g"+(C[1]+11)*6) {
        console.log("Password correct!");
        // window.location.href = "index.html";
        console.log("hahha");
        document.querySelector("#loader").classList.remove("invisible");
        // window.location.href = "index.html";
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
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


