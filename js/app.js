let start;
const fadeElements = document.querySelectorAll('.showMent');

let obser = new IntersectionObserver(e => {
  e.forEach(box => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});

fadeElements.forEach(el => {
  obser.observe(el);
});

const showStart = document.querySelector('.showStart');

let startShowObser = new IntersectionObserver(e => {
  e.forEach(box => {
    box.target.style.height = '300px';
    box.target.style.background = '#fff';
  });
});

startShowObser.observe(showStart);
