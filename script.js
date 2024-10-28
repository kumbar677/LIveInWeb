document.getElementById('booking-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const roomType = document.querySelector('input[name="room-type"]:checked').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  const prices = {
    single: 100,
    double: 150,
    suite: 250,
  };

  if (roomType && checkin && checkout) {
    const days = calculateDays(checkin, checkout);
    const totalCost = prices[roomType] * days;

    // Save booking details in localStorage for confirmation page
    localStorage.setItem('roomType', roomType);
    localStorage.setItem('checkin', checkin);
    localStorage.setItem('checkout', checkout);
    localStorage.setItem('totalCost', totalCost);

    window.location.href = 'confirmation.html';
  } else {
    alert('Please fill all the details.');
  }
});

document.getElementById('logout')?.addEventListener('click', function() {
  window.location.href = 'index.html'; // Redirect to sign-in page
});

// Display booking details on confirmation page
if (window.location.pathname.includes('confirmation.html')) {
  document.getElementById('room-type').textContent = localStorage.getItem('roomType');
  document.getElementById('checkin-date').textContent = localStorage.getItem('checkin');
  document.getElementById('checkout-date').textContent = localStorage.getItem('checkout');
  document.getElementById('total-cost').textContent = localStorage.getItem('totalCost');

  document.getElementById('logout').addEventListener('click', function() {
    localStorage.clear();
    window.location.href = 'index.html'; // Redirect to sign-in page
  });
}

// Helper function to calculate the number of days between check-in and check-out
function calculateDays(checkin, checkout) {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  const dayDiff = timeDiff / (1000 * 3600 * 24);
  return Math.ceil(dayDiff);
}
