const circle = document.querySelector('.container');
const musicBox = document.querySelector('.musicBox');
const showChart = document.querySelector('.showChart');
const prev_nextBox = document.querySelector('.prev_next');
const prev = document.querySelector('.prev');
const next = prev.nextElementSibling;
const reset = document.querySelector('.reset');
const siteName = document.querySelector('.site_name');
const siteTitle = document.querySelector('.siteTitle');

let setCircleStyle = function (styles, delay) {
  setTimeout(() => {
    Object.assign(circle.style, styles);
  }, delay);
};

let animateCircle = () => {
  setCircleStyle(
    {
      borderRadius: '12px',
      width: '80%',
      height: '800px',
    },
    100,
  );
};

let animateMusicBox = () => {
  setTimeout(() => {
    musicBox.setAttribute('style', 'opacity:1');
    siteTitle.setAttribute('style', 'opacity:1; ');
    reset.setAttribute('style', 'opacity:1');
  }, 700);
};

let showChartAnime = () => {
  setTimeout(() => {
    musicBox.setAttribute('style', 'border-radius:50%; transform:scale(1.5)');
    circle.setAttribute(
      'style',
      'width:700px; height:850px; border-radius:12px; margin: 0px auto;justify-content: flex-start;',
    );
  }, 200);
  setTimeout(() => {
    musicBox.setAttribute('style', 'display:none;');
  }, 600);
};

let siteNames = [
  'Vibe',
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
  siteTitle.textContent = siteNames[siteNums];
};

showChart.addEventListener('click', e => {
  showChartAnime();
  isAnimate = false;
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
  siteColor(siteNums);
});

next.addEventListener('click', e => {
  siteNums++;
  if (siteNums >= siteNames.length) {
    siteNums = 0;
  }
  siteNameContent(siteNums);
  siteColor(siteNums);
});

reset.addEventListener('click', () => {
  musicBox.setAttribute('style', 'opacity:1;');
  circle.setAttribute(
    'style',
    'width: 80%; height:800px; margin:0 auto; border-radius: 12px;',
  );

  siteColor(siteNums);
});

// Start animations
let isAnimate = true;

animateCircle();
animateMusicBox();

const siteColor = function (siteNums) {
  switch (siteNums) {
    case 1:
      musicBox.setAttribute('style', 'background:#1DB954; opacity:1;');
      next.style.background = '#1DB954';
      prev.style.background = '#1DB954';
      reset.style.background = '#1DB954';
      showChart.style.background = '#191414';
      break;

    case 2:
      musicBox.setAttribute('style', 'background:#00cd3b; opacity:1;');
      next.style.background = '#00cd3b';
      prev.style.background = '#00cd3b';
      reset.style.background = '#00cd3b';
      showChart.style.background = '#191414';
      break;
    case 3:
      musicBox.setAttribute('style', 'background:#0095ff; opacity:1;');
      next.style.background = '#0095ff';
      prev.style.background = '#0095ff';
      reset.style.background = '#0095ff';
      showChart.style.background = '#191414';
      break;

    case 4:
      musicBox.setAttribute('style', 'background:#ff3b28; opacity:1;');
      next.style.background = '#ff3b28';
      prev.style.background = '#ff3b28';
      reset.style.background = '#ff3b28';
      showChart.style.background = '#191414';
      break;

    case 5:
      musicBox.setAttribute('style', 'background:#3f3fff; opacity:1;');
      next.style.background = '#3f3fff';
      prev.style.background = '#3f3fff';
      reset.style.background = '#3f3fff';
      showChart.style.background = '#191414';
      break;

    case 6:
      musicBox.setAttribute('style', 'background:#fa243c; opacity:1;');
      next.style.background = '#fa243c';
      prev.style.background = '#fa243c';
      reset.style.background = '#fa243c';
      showChart.style.background = '#191414';
      break;

    default:
      musicBox.setAttribute('style', 'background:#ed0b43; opacity:1;');
      next.style.background = '#ed0b43';
      prev.style.background = '#ed0b43';
      reset.style.background = '#ed0b43';
      showChart.style.background = '#191414';
      break;
  }
};
// 'Vibe',
// 'Youtube Music',
// 'Spotify',
// 'Melon',
// 'Genie',
// 'Bugs',
// 'Flo',
// 'Apple Music',
