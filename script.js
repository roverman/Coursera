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

console.log("Welcome my friend! Fuck!");

$("#submitPassword").on("click", function validatePassword() {
    var getPassword = document.querySelector("#inputPassword").value;
    console.log(getPassword);
    if (getPassword == "weitangdesign") {
        console.log("Password correct!");
        window.location.href = "index.html";
    }
    else {
        console.log("Password Wrong!");
        alert("Wrong password, try again!")
    };
});