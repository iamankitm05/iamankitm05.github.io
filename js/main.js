document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI components
    type(); // Typing animation
    initMobileMenu(); // Mobile menu logic
    initScrollAnimations(); // Scroll observer

    // Render Data
    renderProjects();

    // Initialize Star Background
    // 100 stars for a good universe feel
    new StarBackground(150);
});
