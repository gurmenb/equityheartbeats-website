// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }
});

// Simple form validation for newsletter signup
document.querySelector('form').addEventListener('submit', function (e) {
    const emailInput = this.querySelector('input[type="email"]');
    if (!emailInput.value) {
        alert('Please enter your email address.');
        e.preventDefault();
    }
});

