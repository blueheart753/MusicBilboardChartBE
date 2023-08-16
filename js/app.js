let start;
const fadeElements = document.querySelectorAll('.showMent');

let obser = new IntersectionObserver(e => {
  e.forEach(box => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
      box.target.style.marginRight = 0;
    } else {
      box.target.style.opacity = 0;
      box.target.style.marginRight = '400px';
    }
  });
});

fadeElements.forEach(el => {
  obser.observe(el);
});

const showStart = document.querySelector('.showStart');

let startShowObser = new IntersectionObserver(e => {
  e.forEach(box => {
    if (box.isIntersecting) {
      box.target.style.background = '#f5f5f7';
      box.target.style.width = '100%';
    } else {
      box.target.style.widht = 0;
      box.target.style.marginTop = '300px';
    }
  });
});

startShowObser.observe(showStart);
