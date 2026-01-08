// Custom JavaScript for Vivian Floristeria
// This file can be used for interactive elements, form validations, etc.
// For now, Bootstrap's JavaScript bundle handles most of the interactivity (e.g., navbar toggler, tabs).

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vivian Floristeria website loaded.');

    // Example: Add a simple animation to hero button on hover (optional, Bootstrap already adds some hover effects)
    const heroButton = document.querySelector('.hero-section .btn');
    if (heroButton) {
        heroButton.addEventListener('mouseover', function() {
            heroButton.style.transform = 'scale(1.05)';
            heroButton.style.transition = 'transform 0.3s ease';
        });
        heroButton.addEventListener('mouseout', function() {
            heroButton.style.transform = 'scale(1)';
        });
    }

    // You can add more complex JS here as needed, e.g.,
    // - Image carousels (if not using Bootstrap's built-in carousel)
    // - Form submission handling (AJAX)
    // - Dynamic content loading
    // - Scroll animations
});
