// Dark/Light Mode with persistence
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) document.body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Typed text animation
const typedElement = document.querySelector('.typed');
const words = ["Web Developer", "UI/UX Designer", "Problem Solver", "Creative Coder"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const current = words[i];
  if (!isDeleting) {
    typedElement.textContent = current.slice(0, ++j);
    if (j === current.length) isDeleting = true;
  } else {
    typedElement.textContent = current.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 70 : 150);
}
type();

// Scroll reveal animation
const fadeEls = document.querySelectorAll('.fade-up');
const revealOnScroll = () => {
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

