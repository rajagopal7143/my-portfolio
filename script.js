document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('main-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.main-nav a');

    // --- Header background change on scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Toggle mobile menu ---
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // --- Close mobile menu when a navigation link is clicked ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // --- Highlight active navigation link based on scroll position ---
     const sections = document.querySelectorAll('section');
     window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
     });

    // --- Animate elements into view on scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            // Check if element is in viewport
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load
});