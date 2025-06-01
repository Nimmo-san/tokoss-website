// Parallax Scroll for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
  
    // Adjust the background position based on scroll
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  });