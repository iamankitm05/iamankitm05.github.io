class Star {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 1.5 + 0.3; // Tiny stars (0.3px to 1.8px)

        // Very slow random velocity
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;

        // Subtle, varied opacity
        this.opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5 (Dimmer)
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        this.fadeSpeed = Math.random() * 0.003 + 0.001;

        // Subtle colors
        const colors = ['#ffffff', '#e2e8f0', '#f1f5f9', '#fff7ed', '#e0e7ff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > this.canvas.width) this.x = 0;
        else if (this.x < 0) this.x = this.canvas.width;

        if (this.y > this.canvas.height) this.y = 0;
        else if (this.y < 0) this.y = this.canvas.height;

        this.opacity += this.fadeDirection * this.fadeSpeed;
        if (this.opacity >= 0.6 || this.opacity <= 0.1) {
            this.fadeDirection *= -1;
        }
    }

    draw() {
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

class StarBackground {
    constructor(count = 150) {
        this.canvas = document.getElementById('star-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.count = count;

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.stars = [];
        for (let i = 0; i < this.count; i++) {
            this.stars.push(new Star(this.canvas, this.ctx));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(() => this.animate());
    }
}
