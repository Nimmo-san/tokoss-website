const carousel = document.querySelector('.testimonial-carousel');
let isPaused = false;

// Auto-scroll logic (as before)
function scrollCarousel() {
  if (!isPaused) {
    carousel.scrollLeft += .5;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0;
    }
  }
  requestAnimationFrame(scrollCarousel);
}

// Pause on hover (desktop)
carousel.addEventListener('mouseenter', () => isPaused = true);
carousel.addEventListener('mouseleave', () => isPaused = false);

// Touch swipe logic
let startX;
let isDown = false;

carousel.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  isPaused = true;
});

carousel.addEventListener('touchend', () => {
  isDown = false;
  isPaused = false;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1; // Adjust multiplier for sensitivity
  carousel.scrollLeft -= walk;
});

scrollCarousel()
