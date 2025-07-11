// Scroll Reveal simple
function revealOnScroll() {
  const reveals = document.querySelectorAll('[data-reveal]');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Validación simple del formulario contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name.length < 2) {
    alert('Por favor, ingresa un nombre válido (mínimo 2 caracteres).');
    form.name.focus();
    return;
  }

  // Email básico con regex simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un email válido.');
    form.email.focus();
    return;
  }

  if (message.length < 10) {
    alert('Por favor, ingresa un mensaje de al menos 10 caracteres.');
    form.message.focus();
    return;
  }

  // Si pasa validación, podés enviar el formulario o hacer lo que quieras:
  alert('Formulario enviado correctamente. ¡Gracias!');
  form.reset();
});


// Botones "Me interesa" - ejemplo simple
const buttons = document.querySelectorAll('.btn-interest');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.getAttribute('data-service');
    alert(`¡Gracias por tu interés en: ${service}! Nos pondremos en contacto pronto.`);
  });
});
