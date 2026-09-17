// justClimb — small site behaviors: mobile menu toggle + contact form placeholder.
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });
  }

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // No backend is wired up yet — see README.md for options
      // (Formspree, Netlify Forms, or a small serverless function).
      alert('Thanks! This form is not yet connected to send enquiries — see README.md for how to hook it up.');
    });
  }
});
