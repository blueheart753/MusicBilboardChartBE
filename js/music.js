const circle = document.querySelector('.container');
const musicBox = document.querySelector('.musicBox');
const showChart = document.querySelector('.showChart');
const prev_nextBox = document.querySelector('.prev_next');
const prev = document.querySelector('.prev');
const next = prev.nextElementSibling;
const reset = document.querySelector('.reset');
const siteName = document.querySelector('.site_name');

let setCircleStyle = function (styles, delay) {
  setTimeout(() => {
    Object.assign(circle.style, styles);
  }, delay);
};

let animateCircle = () => {
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
};

let animateMusicBox = () => {
  setTimeout(() => {
    musicBox.setAttribute('style', 'opacity:1');
    reset.setAttribute('style', 'opacity:1');
  }, 2000);
};

let showChartAnime = () => {
  setTimeout(() => {
    musicBox.setAttribute('style', 'border-radius:50%; transform:scale(1.5)');
    circle.setAttribute(
      'style',
      'width:600px; height:860px; border-radius:12px; margin: 0px auto',
    );
  }, 200);
  setTimeout(() => {
    musicBox.setAttribute('style', 'display:none;');
  }, 600);
};

let siteNames = [
  'Vibe',
  'Youtube Music',
  'Spotify',
  'Melon',
  'Genie',
  'Bugs',
  'Flo',
  'Apple Music',
];

let siteNums = 0;

let siteNameContent = function (siteNums) {
  siteName.textContent = siteNames[siteNums];
};

showChart.addEventListener('click', e => {
  e.stopPropagation();
  showChartAnime();
  isAnimate = false;
});

circle.addEventListener('click', e => {
  if (isAnimate) {
    e.stopPropagation();
  } else {
    animateMusicBox();
    isAnimate = true;
  }
});

musicBox.addEventListener('click', e => {
  e.stopPropagation();
});

prev.addEventListener('click', e => {
  siteNums--;
  if (siteNums < 0) {
    siteNums = siteNames.length - 1;
  }
  siteNameContent(siteNums);
});

next.addEventListener('click', e => {
  siteNums++;
  if (siteNums >= siteNames.length) {
    siteNums = 0;
  }
  siteNameContent(siteNums);
});

reset.addEventListener('click', () => {
  musicBox.setAttribute('style', 'opacity:1;');
  circle.setAttribute(
    'style',
    'width: 80%; height:800px; margin:0 auto; border-radius: 12px',
  );
});

// Start animations
let isAnimate = true;

animateCircle();
animateMusicBox();
