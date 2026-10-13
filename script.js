const button = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  button.querySelector('.sr-only').textContent = open ? 'Mở menu' : 'Đóng menu';
});
nav?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
    button.querySelector('.sr-only').textContent = 'Mở menu';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
