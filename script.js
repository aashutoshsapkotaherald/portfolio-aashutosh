document.addEventListener('DOMContentLoaded', function() {

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        function toggleMenu() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        menuToggle.addEventListener('click', toggleMenu);
        menuToggle.addEventListener('touchend', function(e) {
            e.preventDefault(); // Prevent double-firing
            toggleMenu();
        });

        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        function handleOutsideClick(event) {
            if (window.innerWidth <= 768) {
                const isClickInsideNav = navLinks.contains(event.target);
                const isClickOnToggle = menuToggle.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        }
        
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchend', handleOutsideClick);
    }

    const contactForm = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (contactForm && messageDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const messageInput = document.getElementById('message').value.trim();
            
            if (nameInput === '' || emailInput === '' || messageInput === '') {
                messageDiv.textContent = 'You need to fill out all the fields.';
                messageDiv.style.color = 'red';
            } else {
                messageDiv.textContent = 'Howdy! I will be in touch shortly.';
                messageDiv.style.color = 'grey';
                contactForm.reset();
            }
        });
    }
});

