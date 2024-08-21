document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to volunteer form when committee buttons are clicked
    const committeeButtons = document.querySelectorAll('.committee-card .button');
    committeeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Pre-select the committee in the form dropdown
            const committee = this.getAttribute('data-committee');
            document.getElementById('committee').value = committee;
        });
    });

    // Handle form submission
    const volunteerForm = document.getElementById('volunteerForm');
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(volunteerForm);
        const formObject = Object.fromEntries(formData);

        // Here you would typically send this data to your server
        // For now, we'll just log it to the console and show an alert
        console.log('Form submitted:', formObject);

        // Show a success message
        alert('Thank you for volunteering! We will contact you soon.');

        // Reset the form
        volunteerForm.reset();
    });

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Initially hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
});
