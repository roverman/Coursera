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







console.log("Welcome my friend!");

$("#submitPassword").on("click", function validatePassword() {
    var getPassword = document.querySelector("#inputPassword").value;
    console.log(getPassword);
    var A = "we"
    var B = "itan"
    var C = 100
    if (getPassword == A+B+"g"+(C+11)*6) {
        console.log("Password correct!");
        // window.location.href = "index.html";
        console.log("hahha");
        window.location.href = "index.html";
    }
    else {
        console.log("Password Wrong!");
        document.querySelector("#inputPassword").classList.add("border-danger");
        document.querySelector("#passwordAlert").classList.remove("invisible");
        setTimeout(function() {
            document.querySelector("#passwordAlert").classList.add("invisible");
        }, 1000);
    };
});