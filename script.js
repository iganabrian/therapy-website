const hamburger = document.querySelector('.navbar');
const hamburgerBtn = document.querySelector('#hamburger');
const navLinks = document.querySelectorAll('.navbar a'); // Select all links inside the navbar

// Toggle menu when clicking the hamburger icon
hamburgerBtn.onclick = () => {
    hamburger.classList.toggle('active');
};

// Close menu when clicking any nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
    });
});