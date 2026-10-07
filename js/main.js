/**
 * Rishabh Mishra - Data Analyst Portfolio
 * Main Interactivity Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons if available
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            if (hamburgerBtn) hamburgerBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            if (hamburgerBtn) hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMobileMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // -------------------------------------------------------------
    // 2. Navbar Scroll Styling & Active Link Spy
    // -------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link spy
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Initial check

    // -------------------------------------------------------------
    // 3. Smooth Scroll for Anchor Links
    // -------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------------------------------------------------
    // 4. Hero Animated Counters (Intersection Observer)
    // -------------------------------------------------------------
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1800; // ms
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.ceil(current);
                }
            }, stepTime);
        });
        countersAnimated = true;
    }

    const heroSection = document.getElementById('home');
    if (heroSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        counterObserver.observe(heroSection);
    } else {
        animateCounters();
    }

    // -------------------------------------------------------------
    // 5. Scroll Fade-Up Animations (Intersection Observer)
    // -------------------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeObserverOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // -------------------------------------------------------------
    // 6. Interactive Skill Cards
    // -------------------------------------------------------------
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            skillCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
        card.addEventListener('click', () => {
            skillCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // -------------------------------------------------------------
    // 7. Project Case Study Modals
    // -------------------------------------------------------------
    const modalButtons = document.querySelectorAll('.open-modal, .view-case-study');
    const closeButtons = document.querySelectorAll('.close-modal');
    const allModals = document.querySelectorAll('.modal');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            // Force reflow
            void modal.offsetWidth;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        }
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            // Check if any other modal is still open
            const anyOpen = document.querySelector('.modal.show');
            if (!anyOpen) {
                document.body.style.overflow = '';
            }
        }, 300);
    }

    modalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal') || `modal-${btn.getAttribute('data-project')}`;
            if (modalId) {
                openModal(modalId);
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Close on ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.show');
            if (activeModal) {
                closeModal(activeModal);
            }
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        }
    });

    // -------------------------------------------------------------
    // 8. Contact Form Submission (Client Feedback)
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending...</span>`;
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.innerHTML = `<span>Message Sent Successfully! ✓</span>`;
                    submitBtn.style.backgroundColor = '#2E7D32';
                }

                const notification = document.createElement('div');
                notification.className = 'form-notification success';
                notification.innerHTML = `<strong>Thank you!</strong> Your message has been prepared. Rishabh will get back to you shortly.`;
                contactForm.prepend(notification);

                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.backgroundColor = '';
                    }
                    if (notification) {
                        notification.remove();
                    }
                }, 4000);
            }, 600);
        });
    }

    console.log('Rishabh Mishra Portfolio initialized successfully.');
});
