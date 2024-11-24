// Smooth scroll effect for the gallery and testimonials (if needed)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA clicked! Redirecting...');
    });
});
// Open modal
const openFormButtons = document.querySelectorAll('#open-form');
const modal = document.getElementById('form-modal');
const closeModalButton = document.getElementById('close-form');

openFormButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Close modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('.toggle-text').addEventListener('click', () => {
  document.querySelector('.privacy-text').style.display = document.querySelector('.privacy-text').style.display === 'none' ? 'block' : 'none';
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);