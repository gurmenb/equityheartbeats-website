// Function to toggle the mobile menu
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

// Event listener for mobile menu toggle button
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation example (for Contact form)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        let valid = true;

        // Example validation for email input
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && !emailInput.value.includes('@')) {
            valid = false;
            emailInput.style.borderColor = 'red';
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.style.borderColor = '';
            emailInput.setCustomValidity('');
        }

        // If form is invalid, prevent submission
        if (!valid) {
            e.preventDefault();
        }
    });
});

// Example function to handle form submission (can be customized)
function handleFormSubmission(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Log form data (for demonstration)
    console.log('Form submitted with data:', data);

    // Optionally, you can send this data to a server or show a success message
}

// Attach form submission handler to forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleFormSubmission);
});

// Additional interactive functionality can be added below
// For example, handling click events for donation buttons, etc.

