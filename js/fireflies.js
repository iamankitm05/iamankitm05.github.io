class Firefly {
    constructor(id) {
        this.id = id;
        this.element = document.createElement('div');
        this.element.classList.add('firefly');

        // Random Properties
        this.size = Math.random() * 4 + 2; // 2px to 6px
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        // Random Colors (Neon Palette)
        const colors = ['#536DFE', '#69F0AE', '#F44336', '#E040FB', '#FFD740', '#00BCD4'];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Physics
        this.vx = (Math.random() - 0.5) * 1.5; // Velocity
        this.vy = (Math.random() - 0.5) * 1.5;
        this.originalSpeed = { x: this.vx, y: this.vy };

        // Interaction State
        this.isDragging = false;

        // Apply Initial Styles
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.color;
        this.element.style.color = this.color; // For box-shadow currentColor
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.animation = `pulseGlow ${Math.random() * 2 + 2}s infinite alternate`;

        // Attach Event Listeners
        this.attachEvents();

        // Append to DOM
        const container = document.getElementById('fireflies-container') || document.body;
        container.appendChild(this.element);
    }

    attachEvents() {
        // Mouse Events
        this.element.addEventListener('mousedown', (e) => this.startDrag(e));
        window.addEventListener('mousemove', (e) => this.drag(e));
        window.addEventListener('mouseup', () => this.endDrag());

        // Touch Events
        this.element.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
        window.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
        window.addEventListener('touchend', () => this.endDrag());
    }

    startDrag(e) {
        this.isDragging = true;
        this.element.style.cursor = 'grabbing';
        this.element.style.animation = 'none'; // Stop pulse while dragging
        this.element.style.boxShadow = `0 0 20px ${this.color}`;

        // Prevent default text selection
        e.preventDefault();
    }

    drag(e) {
        if (!this.isDragging) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        this.x = clientX - this.size / 2;
        this.y = clientY - this.size / 2;

        this.updatePosition();
    }

    endDrag() {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.element.style.cursor = 'grab';
        this.element.style.animation = `pulseGlow ${Math.random() * 2 + 2}s infinite alternate`;

        // Give it a little "throw" momentum or reset to random movement
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
    }

    update() {
        if (this.isDragging) return;

        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

        // Occasional Random Direction Change
        if (Math.random() < 0.01) {
            this.vx += (Math.random() - 0.5) * 0.5;
            this.vy += (Math.random() - 0.5) * 0.5;

            // Limit Speed
            const maxSpeed = 2;
            this.vx = Math.max(Math.min(this.vx, maxSpeed), -maxSpeed);
            this.vy = Math.max(Math.min(this.vy, maxSpeed), -maxSpeed);
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

class FireflyController {
    constructor(count = 20) {
        this.fireflies = [];
        this.init(count);
        this.animate();
    }

    init(count) {
        // Create Container if not exists
        if (!document.getElementById('fireflies-container')) {
            const container = document.createElement('div');
            container.id = 'fireflies-container';
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.pointerEvents = 'none'; // Let clicks pass through container
            container.style.zIndex = '0'; // Background layer
            document.body.prepend(container);
        }

        for (let i = 0; i < count; i++) {
            this.fireflies.push(new Firefly(i));
        }
    }

    animate() {
        this.fireflies.forEach(firefly => firefly.update());
        requestAnimationFrame(() => this.animate());
    }
}
