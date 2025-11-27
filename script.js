// ===========================
// Project Filtering
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.animation = 'fadeIn 0.5s ease-out';
                        }, 50);
                    } else if (categories && categories.includes(filterValue)) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.animation = 'fadeIn 0.5s ease-out';
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ===========================
    // Contact Form Handling
    // ===========================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            // In a real application, you would send this data to a server

            // Show success message
            formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
            formMessage.className = 'form-message success';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('success');
                formMessage.textContent = '';
            }, 5000);

            // For actual implementation, you might use:
            // fetch('your-api-endpoint', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     formMessage.textContent = 'Thank you! Your message has been sent.';
            //     formMessage.className = 'form-message success';
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            //     formMessage.className = 'form-message error';
            // });
        });
    }

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===========================
    // Navbar Scroll Effect
    // ===========================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for fade-in animation
    const cards = document.querySelectorAll('.tech-card, .project-card, .about-card, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // ===========================
    // Dynamic Year in Footer
    // ===========================
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText && footerText.textContent.includes('2025')) {
        footerText.textContent = footerText.textContent.replace('2025', currentYear);
    }

    // ===========================
    // Add Loading Animation to External Links
    // ===========================
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add subtle animation when clicking external links
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // ===========================
    // Keyboard Navigation Enhancement
    // ===========================
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
                navLinks[index + 1].focus();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                navLinks[index - 1].focus();
            }
        });
    });

    // ===========================
    // Performance: Lazy Load Images (if any are added later)
    // ===========================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===========================
    // Console Easter Egg
    // ===========================
    console.log('%c👋 Hello, fellow developer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in how this portfolio was built?', 'color: #764ba2; font-size: 14px;');
    console.log('%cCheck out the source code on GitHub: https://github.com/vt0299', 'color: #667eea; font-size: 12px;');
    console.log('%c✨ Built with HTML, CSS, and vanilla JavaScript', 'color: #10b981; font-size: 12px;');
});

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
