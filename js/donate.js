document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to donation form when buttons are clicked
    const donateButtons = document.querySelectorAll('.donation-card .button');
    donateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Set donation frequency based on button clicked
            if (this.textContent === 'Set Up Monthly Donation') {
                document.getElementById('frequency').value = 'monthly';
            } else {
                document.getElementById('frequency').value = 'one-time';
            }
        });
    });

    // Handle donation form submission
    const donateForm = document.getElementById('donateForm');
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(donateForm);
        const formObject = Object.fromEntries(formData);

        // Here you would typically send this data to your server or payment processor
        // For now, we'll just log it to the console and show an alert
        console.log('Donation submitted:', formObject);

        // Show a success message
        alert(`Thank you for your generous ${formObject.frequency} donation of $${formObject.amount}! Your support means the world to us and will help make a significant impact.`);

        // Reset the form
        donateForm.reset();
    });

    // Simple impact story slider
    const stories = document.querySelectorAll('.story');
    let currentStory = 0;

    function showNextStory() {
        stories[currentStory].style.display = 'none';
        currentStory = (currentStory + 1) % stories.length;
        stories[currentStory].style.display = 'block';
    }

    // Initially hide all stories except the first one
    stories.forEach((story, index) => {
        if (index !== 0) {
            story.style.display = 'none';
        }
    });

    // Change story every 5 seconds
    setInterval(showNextStory, 5000);

    // Optional: Add animation to impact stories as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    stories.forEach(story => {
        observer.observe(story);
    });
});
