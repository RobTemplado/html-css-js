 // Enhanced Contact Form Validation
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill out all required fields.');
                return;
            }

            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            alert('Thank you for your message!');
            form.reset();
        });

        // Background color change on project title click
        function changeBackgroundColor() {
            const portfolioSection = document.getElementById('portfolio');
            // A palette of dark colors that match your theme
            const darkPalette = ['#1F2937', '#111827', '#0F172A', '#374151'];
            
            // Get the current background color to prevent picking the same one
            const currentRgbColor = window.getComputedStyle(portfolioSection).backgroundColor;
            
            let newColor = darkPalette[Math.floor(Math.random() * darkPalette.length)];
            
            // This is a simple way to check against hex colors. 
            // A more robust solution would convert the RGB to hex, but this works well here.
            // We just ensure we don't pick the default portfolio color again if it's currently active.
            if (currentRgbColor === 'rgb(31, 41, 55)') { // The RGB for #1F2937
                 while (newColor === '#1F2937') {
                    newColor = darkPalette[Math.floor(Math.random() * darkPalette.length)];
                 }
            }

            portfolioSection.style.backgroundColor = newColor;
        }

        // Show full image in a modal
        function showFullImage(linkElement) {
            const imgElement = linkElement.querySelector('img');
            const cardBody = linkElement.closest('.card').querySelector('.card-body');
            const projectTitle = cardBody.querySelector('.project-title').textContent.trim();
            const imageSrc = imgElement.src;
            document.getElementById('fullImage').src = imageSrc;
            document.getElementById('imageModalLabel').textContent = projectTitle;
        }

        // Other Scripts on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer for Navbar Highlighting
            const sections = document.querySelectorAll('.section-to-observe');
            const navLinks = document.querySelectorAll('.nav-link');
            const navObserverOptions = { root: null, rootMargin: '0px', threshold: 0.6 };
            const navObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                        navLinks.forEach(link => link.classList.remove('active'));
                        if (navLink) { navLink.classList.add('active'); }
                    }
                });
            }, navObserverOptions);
            sections.forEach(section => { navObserver.observe(section); });

            // Intersection Observer for Fade-in Animations
            const fadeinElements = document.querySelectorAll('.fade-in');
            const fadeinObserverOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
            const fadeinObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, fadeinObserverOptions);
            fadeinElements.forEach(element => { fadeinObserver.observe(element); });
            
            // Scroll to Top Button Logic
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Scroll to top functionality
            scrollToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
 // Enhanced Contact Form Validation
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill out all required fields.');
                return;
            }

            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            alert('Thank you for your message!');
            form.reset();
        });

        // Background color change on project title click
        function changeBackgroundColor() {
            const portfolioSection = document.getElementById('portfolio');
            // A palette of dark colors that match your theme
            const darkPalette = ['#1F2937', '#111827', '#0F172A', '#374151'];
            
            // Get the current background color to prevent picking the same one
            const currentRgbColor = window.getComputedStyle(portfolioSection).backgroundColor;
            
            let newColor = darkPalette[Math.floor(Math.random() * darkPalette.length)];
            
            // This is a simple way to check against hex colors. 
            // A more robust solution would convert the RGB to hex, but this works well here.
            // We just ensure we don't pick the default portfolio color again if it's currently active.
            if (currentRgbColor === 'rgb(31, 41, 55)') { // The RGB for #1F2937
                 while (newColor === '#1F2937') {
                    newColor = darkPalette[Math.floor(Math.random() * darkPalette.length)];
                 }
            }

            portfolioSection.style.backgroundColor = newColor;
        }

        // Show full image in a modal
        function showFullImage(linkElement) {
            const imgElement = linkElement.querySelector('img');
            const cardBody = linkElement.closest('.card').querySelector('.card-body');
            const projectTitle = cardBody.querySelector('.project-title').textContent.trim();
            const imageSrc = imgElement.src;
            document.getElementById('fullImage').src = imageSrc;
            document.getElementById('imageModalLabel').textContent = projectTitle;
        }

        // Other Scripts on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector(".full-screen").scrollIntoView();
        })


        
