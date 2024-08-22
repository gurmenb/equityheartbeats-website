document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to RSVP form when RSVP buttons are clicked
    const rsvpButtons = document.querySelectorAll('.rsvp-button');
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Pre-select the event in the form dropdown
            const eventName = this.getAttribute('data-event');
            document.getElementById('event').value = eventName;
        });
    });

    // Handle RSVP form submission
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(rsvpForm);
        const formObject = Object.fromEntries(formData);

        // Here you would typically send this data to your server
        // For now, we'll just log it to the console and show an alert
        console.log('RSVP submitted:', formObject);

        // Show a success message
        alert('Thank you for your RSVP! We look forward to seeing you at the event.');

        // Reset the form
        rsvpForm.reset();
    });

    // Dynamically update the max date for past events
    const pastEvents = document.querySelectorAll('.timeline-item .event-date');
    const currentDate = new Date();
    pastEvents.forEach(eventDate => {
        const date = new Date(eventDate.textContent);
        if (date > currentDate) {
            eventDate.closest('.timeline-item').style.display = 'none';
        }
    });

    // Optional: Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
