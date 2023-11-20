import logo from './/logo.png';
import './App.css';
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect } from 'react';

const animation = require('animejs');

const App = () => {
  useEffect(() => {
    const obser = new IntersectionObserver((entries, observer) => {
      entries.forEach((item) => {
        item.isIntersecting
          ? item.target.classList.add('animeStartMent')
          : item.target.classList.remove('animeStarMent');
      });
    });

    const showMents = document.querySelectorAll('.startMent');
    showMents.forEach((el) => {
      obser.observe(el);
    });
  });

  return (
    <div className="App">
      <header>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </header>
      <div className="mentBox">
        <div className="showMents show_page">
          <h2 className="ment startMent">Hello? This is MBC!</h2>
          <p>(Music Bilboard Chart)</p>
        </div>
      </div>
      <div className="mentBox">
        <div className="showMents show_page">
          <h2 className="ment ment_2">
            이제 힘들게😫 하나씩 찾아 볼 필요 없어요!
          </h2>
        </div>
      </div>
      <div className="mentBox">
        <div className="showMents show_page">
          <h2 className="ment ment_3">
            국내에 있는 음악 스트리밍 사이트의 집합체!
          </h2>
          <p>
            국내에 서비스 중인 음악 스트리밍 사이트의 인기 순위를 한눈에 볼 수
            있어요
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
