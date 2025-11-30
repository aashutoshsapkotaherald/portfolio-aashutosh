document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
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

document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

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

