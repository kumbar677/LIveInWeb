const paymentMethodSelect = document.getElementById("payment-method");
const paymentOptions = document.querySelectorAll(".payment-option");
const paymentStatus = document.getElementById("payment-status");

paymentMethodSelect.addEventListener("change", () => {
    paymentOptions.forEach(option => option.style.display = "none");
    document.getElementById(${paymentMethodSelect.value}-details).style.display = "block";
});

function completePayment() {
    document.querySelector(".payment-form").style.display = "none";
    paymentStatus.style.display = "block";
}