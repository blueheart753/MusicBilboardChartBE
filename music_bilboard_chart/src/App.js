import logo from './/logo.png';
import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  });
  const addRemoveClassOnIntersection = (seletor, className) => {
    const obser = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        item.isIntersecting
          ? item.target.classList.add(className)
          : item.target.classList.remove(className);
      });
    });
    const showMents = document.querySelectorAll(seletor);
    showMents.forEach((el) => {
      obser.observe(el);
    });
  };

  useEffect(() => {
    addRemoveClassOnIntersection('.startMent', 'animeStartMent');
  }, []);

  useEffect(() => {
    addRemoveClassOnIntersection('.ment_2', 'ment_2Anime');
  }, []);

  useEffect(() => {
    addRemoveClassOnIntersection('.ment_3', 'ment_3Anime');
  }, []);
  useEffect(() => {
    addRemoveClassOnIntersection('.ment+p', 'animeMent');
  }, []);
  return (
    <div className="App">
      <header>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </header>
      <div className="mentBox">
        <div className="custom-shape-divider-top-1700529523">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="showMents show_page">
          <h2 className="ment startMent">Hello? This is MBC!</h2>
          <p>MBC (Music Bilboard Chart)에 오신 것을 환영합니다.</p>
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
