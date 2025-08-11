document.getElementById('contactForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks — this is a demo form. To collect messages wire up a service (EmailJS, Formspree, or a backend).');
});
