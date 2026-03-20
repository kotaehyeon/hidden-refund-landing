const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuBtn.textContent = isOpen ? '✕' : '☰';
});
