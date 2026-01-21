document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI components
    type(); // Typing animation
    initMobileMenu(); // Mobile menu logic
    initScrollAnimations(); // Scroll observer

    // Render Data
    renderProjects();

    // Initialize Interactive Fireflies
    // 15 fireflies for a good balance
    new FireflyController(15);
});
