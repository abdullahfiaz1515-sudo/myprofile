document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS Animation Library
    AOS.init({
        once: true,          // Animations trigger only once when scrolling down
        mirror: false,
        anchorPlacement: 'top-bottom'
    });

    // Dynamic Navbar Scroll Styling
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(6, 9, 19, 0.95)';
            navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(6, 9, 19, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scrolling Engine
    const links = document.querySelectorAll('.nav-links a, .hero-btns a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = navbar.offsetHeight + 25; // Navbar + Status bar spacing
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
