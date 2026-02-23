// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Shop Button Handlers
const shopButtons = document.querySelectorAll('.shop-button');
shopButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Shop button clicked!');
        // Add logic to handle shopping
    });
});

// Card Animations
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animate');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animate');
    });
});

// Image Lazy Loading
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

