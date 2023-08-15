let start;
const fadeElements = document.querySelectorAll('.showMent');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
    } else {
      entry.target.style.opacity = '0';
    }
  });
});

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

const startElement = document.querySelector('.showStart');

const startObserver = new IntersectionObserver(entries => {
  start = document.querySelector('.showStart');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      start.setAttribute(
        'style',
        'background:#f5f5f7; height:300px; margin-top:300px',
      );
    }
  });
});

startObserver.observe(startElement);
