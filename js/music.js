const circle = document.querySelector('.container');

function setCircleStyle(styles, delay) {
  setTimeout(() => {
    Object.assign(circle.style, styles);
  }, delay);
}

setCircleStyle({ marginLeft: '47%' }, 500);
setCircleStyle({ marginTop: '300px' }, 1000);
setCircleStyle({ marginTop: '300px' }, 1500);

setCircleStyle(
  {
    borderRadius: '12px',
    width: '80%',
    height: '800px',
    margin: '0 auto',
  },
  1600,
);

const musicBox = document.querySelector('.musicBox');
setTimeout(() => {
  musicBox.setAttribute('style', 'opacity:1');
}, 2000);
