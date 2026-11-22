// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Часы в мок-окне
function tickClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('ru-RU');
}
setInterval(tickClock, 1000);
tickClock();

// Мобильное меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Анимация появления секций
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .shot, .download-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});