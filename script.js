document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. Intersection Observer for Active Nav Links =====
    const sections = document.querySelectorAll('section[id]'); // All sections with IDs
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Get the corresponding nav link and add 'active' class
                const id = entry.target.getAttribute('id');
                const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);
                
                if (matchingLink) {
                    matchingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // ===== 2. Change Portfolio Background on Title Click =====
    const projectTitles = document.querySelectorAll('.project-title');
    const portfolioSection = document.getElementById('portfolio');
    
    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            portfolioSection.style.backgroundColor = color;
            portfolioSection.style.transition = 'background-color 0.5s ease';
        });
    });

    // ===== 3. Form Submission Handling =====
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated');
            return;
        }
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you, ${name}! Your message has been received. I'll contact you at ${email} soon.`);
        
        this.reset();
        this.classList.remove('was-validated');
    });

    // ===== 4. Smooth Scrolling for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});