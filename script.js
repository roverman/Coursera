$(".btn").mouseup(function(){
    $(this).blur();
})

console.log("Welcome my friend! Fuck!");
console.log(this);

$("#copy-promo-button").on("click", function copyToClipboard() {
    var promoCode = document.querySelector("#promo-code");
    console.log(promoCode.value);
    navigator.clipboard.writeText(promoCode.value);
    alert("Promo Code '" + promoCode.value + "' Copied");
});