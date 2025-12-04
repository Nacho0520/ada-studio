// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const budget = document.getElementById('budget').value;
    if (!budget) {
      alert('Por favor selecciona un rango de presupuesto.');
      return;
    }
    
    alert('✅ ¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    this.reset();
  });
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(0, 11, 41, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.background = 'rgba(0, 11, 41, 0.95)';
      header.style.boxShadow = 'none';
    }
  }
});