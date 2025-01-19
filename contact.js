document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevents the default form submission
      alert("Your message has been sent. We will get back to you soon!");
    });
  }
});
