// The full code for before and after slider, i need to figure out the details
const imageWrapper = document.querySelector(`.before-after-wrapper`);
const isTouch = window.matchMedia('(pointer: coarse)').matches;
dragElement(imageWrapper.querySelector('.handle'));

function getCoords(e) {
  let x, y;
  if (isTouch) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }
  return { x, y };
}

function dragElement(el) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (isTouch) {
    el.ontouchstart = dragInit;
  } else {
    el.onmousedown = dragInit;
  }

  function dragInit(e) {
    e.preventDefault();
    const { x, y } = getCoords(e);
    pos3 = x;
    pos4 = y;

    if (isTouch) {
      document.ontouchend = closeElementDrag;
      document.ontouchmove = elementDrag;
    } else {
      document.onmouseup = closeElementDrag;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e.preventDefault();
    const { x, y } = getCoords(e);
    pos1 = pos3 - x;
    pos2 = pos4 - y;
    pos3 = x;
    pos4 = y;

    let wrapperRight = el.offsetLeft - pos1;
    if (wrapperRight >= 0 && wrapperRight <= imageWrapper.offsetWidth) {
      el.style.left = `${el.offsetLeft - pos1}px`;
      imageWrapper.querySelector('.before-image-wrapper').style.width = `${wrapperRight}px`;
    }
  }

  function closeElementDrag() {
    if (isTouch) {
      document.ontouchend = null;
      document.ontouchmove = null;
    } else {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}


// animating the fade, zoom, slide. triggered by scroll, not yet used
const animatedElements = document.querySelectorAll('.animate-fade, .animate-slide, .animate-zoom');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Remove if you want only once
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(el => observer.observe(el));
