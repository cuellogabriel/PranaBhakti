// === SCROLL REVEAL SIMPLE ===
function revealOnScroll() {
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === FORM VALIDATION Y ENVÍO A WHATSAPP ===
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name.length < 2) {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un email válido.');
    return;
  }

  if (message.length < 10) {
    alert('Por favor, escribe un mensaje más completo.');
    return;
  }

  const whatsappMsg = `Hola, soy ${name} (%20${email}). Quiero consultar lo siguiente: ${encodeURIComponent(message)}`;
  const phone = '5491123456789'; // CAMBIAR POR NÚMERO REAL
  window.open(`https://wa.me/${phone}?text=${whatsappMsg}`, '_blank');
});

// === BOTONES "ME INTERESA" ===
document.querySelectorAll('.btn-interest').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    const phone = '5491123456789'; // CAMBIAR POR NÚMERO REAL
    const msg = `Hola, estoy interesad@ en el servicio: ${service}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  });
});

// === CARRUSEL SIMPLE ===
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const slidesContainer = document.querySelector('.slides');
  const totalSlides = slides.length;

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  setInterval(nextSlide, 5000);

