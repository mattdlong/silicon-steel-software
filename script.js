/**
 * Silicon Steel Software
 * Interactive JavaScript
 */

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const nav = document.getElementById('nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navigation with Hide/Show on Scroll
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            nav.classList.add('hidden');
        } else {
            // Scrolling up
            nav.classList.remove('hidden');
        }
    } else {
        nav.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe approach steps
document.querySelectorAll('.approach-step').forEach((step, index) => {
    step.classList.add('fade-in');
    step.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(step);
});

// Observe impact stats
document.querySelectorAll('.impact-stat').forEach((stat, index) => {
    stat.classList.add('fade-in');
    stat.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(stat);
});

// Animated Counter for Impact Stats
const animateCounter = (element, target, duration = 2000) => {
    const isPercentage = target.includes('%');
    const isMultiplier = target.includes('x');
    const isCurrency = target.includes('$');

    let numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    const start = 0;
    const increment = numericTarget / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);

        if (isCurrency) {
            displayValue = '$' + displayValue + (numericTarget >= 1000000 ? 'M+' : '');
        } else if (isPercentage) {
            displayValue = displayValue + '%';
        } else if (isMultiplier) {
            displayValue = displayValue + 'x';
        }

        element.textContent = displayValue;
    }, 16);
};

// Trigger counter animation when stats become visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numberElement = entry.target.querySelector('.impact-stat-number');
            const targetValue = numberElement.textContent;
            entry.target.dataset.animated = 'true';
            animateCounter(numberElement, targetValue);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.impact-stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = 'var(--success-green)';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Add parallax effect to hero visual
const heroVisual = document.querySelector('.hero-visual-grid');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroVisual.style.transform = `translateY(${parallax}px)`;
    });
}

// Active nav link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Console easter egg
console.log('%c Silicon Steel Software ', 'background: #2D2F33; color: #3A8DFF; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Transforming enterprises through AI and digital innovation ', 'color: #6B6B6B; font-size: 12px;');
console.log('%c Interested in joining our team? Contact us at contact@siliconsteelsoftware.com ', 'color: #3A8DFF; font-size: 12px;');
