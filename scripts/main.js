// animating the fade, zoom, slide. triggered by scroll, not yet used
const animatedElements = document.querySelectorAll('.animate-fade, .animate-slide, .animate-zoom');

// nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Remove if you want only once
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(el => observer.observe(el));


navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

