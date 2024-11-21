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


