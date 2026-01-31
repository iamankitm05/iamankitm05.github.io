// --- Typing Animation ---
const typingText = document.getElementById('typing-text');
// Note: Use a more standard phrase set or allow it to be passed in
const phrases = ["Mobile App Developer", "Flutter Expert", "Android Developer", "iOS Engineer", "Solo Leveler"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (!typingText) return;

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
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


// --- Mobile Menu Logic ---
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full');

        if (isClosed) {
            // Open: Slide in functionality
            mobileMenu.classList.remove('translate-x-full');
            menuOverlay.style.display = 'block';
            menuOverlay.offsetHeight; // Force reflow
            menuOverlay.classList.add('open');

            // Switch Icon
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden';
        } else {
            // Close: Slide out
            mobileMenu.classList.add('translate-x-full');
            menuOverlay.classList.remove('open');
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 300);

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu); // Barrier Dismiss

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// --- Scroll Observer ---
function initScrollAnimations() {
    const navbar = document.getElementById('navbar');

    // Navbar background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark-900/95', 'shadow-lg');
            navbar.classList.remove('bg-dark-900/80');
        } else {
            navbar.classList.remove('bg-dark-900/95', 'shadow-lg');
            navbar.classList.add('bg-dark-900/80');
        }
    });

    // Fade In Sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });
}

// --- Render Projects ---
// Relies on window.projects and window.defaultProjectImage from projects.js
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || typeof window.projects === 'undefined') return;

    projectsGrid.innerHTML = window.projects.map(project => {
        const links = project.links || {};
        let actionButtons = '';

        if (links.view) {
            actionButtons += `
                <a href="${links.view}" target="_blank" class="text-xs font-bold text-blue-400 hover:text-blue-300 py-2 px-3 rounded hover:bg-blue-400/10 transition-colors flex items-center gap-2" title="View Project">
                    <i class="fas fa-external-link-alt"></i> View
                </a>`;
        }

        if (links.source) {
            actionButtons += `
                <a href="${links.source}" target="_blank" class="text-xs font-bold text-gray-400 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors flex items-center gap-2" title="Source Code">
                    <i class="fab fa-github"></i> Code
                </a>`;
        }

        if (links.apk) {
            actionButtons += `
                <a href="${links.apk}" target="_blank" class="text-xs font-bold text-green-500 hover:text-green-400 py-2 px-3 rounded hover:bg-green-500/10 transition-colors flex items-center gap-2" title="Download APK">
                    <i class="fab fa-android"></i> APK
                </a>`;
        }

        if (links.playStore) {
            actionButtons += `
                <a href="${links.playStore}" target="_blank" class="text-xs font-bold text-teal-400 hover:text-teal-300 py-2 px-3 rounded hover:bg-teal-400/10 transition-colors flex items-center gap-2" title="Play Store">
                    <i class="fab fa-google-play"></i> Play
                </a>`;
        }

        if (links.appStore) {
            actionButtons += `
                <a href="${links.appStore}" target="_blank" class="text-xs font-bold text-blue-500 hover:text-blue-400 py-2 px-3 rounded hover:bg-blue-500/10 transition-colors flex items-center gap-2" title="App Store">
                    <i class="fab fa-app-store-ios"></i> App
                </a>`;
        }

        if (links.video) {
            actionButtons += `
                <a href="${links.video}" target="_blank" class="text-xs font-bold text-red-500 hover:text-red-400 py-2 px-3 rounded hover:bg-red-500/10 transition-colors flex items-center gap-2" title="Watch Video">
                    <i class="fab fa-youtube"></i> Video
                </a>`;
        }

        return `
        <div class="project-card group relative rounded-xl overflow-hidden bg-dark-800 border border-white/5 flex flex-col h-full hover:border-primary/40">
            <!-- Content -->
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-4 leading-relaxed flex-grow">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `
                        <span class="px-2 py-1 text-[10px] uppercase tracking-wider font-medium rounded-full bg-dark-700 text-gray-300 border border-white/10">
                            ${tag}
                        </span>
                    `).join('')}
                </div>

                <div class="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-white/10">
                    ${actionButtons}
                </div>
            </div>
        </div>
    `}).join('');
}
