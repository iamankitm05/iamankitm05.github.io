// Projects are loaded from projects.js

// --- Typing Animation ---
const typingText = document.getElementById('typing-text');
const phrases = ["Mobile App Developer", "Flutter Expert", "iOS Engineer", "Solo Leveler"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);


// --- Mobile Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navbar = document.getElementById('navbar');

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-full');
    if (isOpen) {
        mobileMenu.classList.remove('translate-x-full');
        menuOverlay.classList.remove('hidden');
        // Slight delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            menuOverlay.classList.remove('opacity-0');
        }, 10);
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenu.classList.add('translate-x-full');
        menuOverlay.classList.add('opacity-0');
        setTimeout(() => {
            menuOverlay.classList.add('hidden');
        }, 300);
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark-900/95', 'shadow-lg');
        navbar.classList.remove('bg-dark-900/80');
    } else {
        navbar.classList.remove('bg-dark-900/95', 'shadow-lg');
        navbar.classList.add('bg-dark-900/80');
    }
});


// --- Render Projects ---
const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="group relative rounded-xl overflow-hidden bg-dark-800 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2">
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
                <div class="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
            </div>
            
            <!-- Content -->
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `
                        <span class="px-3 py-1 text-xs rounded-full bg-dark-700 text-primary border border-primary/20">
                            ${tag}
                        </span>
                    `).join('')}
                </div>

                <a href="${project.link}" class="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                    View Project <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
        </div>
    `).join('');
}

renderProjects();

// --- Intersection Observer for Scroll Animations ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(section => {
    section.classList.add('opacity-0'); // Simply hide initially, animation will show it
    observer.observe(section);
});
