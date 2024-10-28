// Handle payment method selection
const methods = document.querySelectorAll('.method');
const paymentForm = document.getElementById('payment-form');

methods.forEach(method => {
    method.addEventListener('click', function() {
        // Remove 'selected' class from all methods
        methods.forEach(m => m.classList.remove('selected'));

        // Add 'selected' class to the clicked method
        this.classList.add('selected');

        // Show the payment form
        paymentForm.classList.remove('hidden');
    });
});

// Handle payment form submission
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate payment processing
    setTimeout(() => {
        // Hide the payment form
        this.style.display = 'none';

        // Show the success message
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
    }, 2000); // Simulate a delay for payment processing
});
