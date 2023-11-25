import './static/css/App.css';
import './static/css/Anime.css';
import React, { useEffect } from 'react';
import Header from './view/Header';
import Section from './view/Section';

const App = () => {
  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  });

  const addRemoveClassOnIntersection = (selector, className) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        item.isIntersecting
          ? item.target.classList.add(className)
          : item.target.classList.remove(className);
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      observer.observe(el);
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
      <Header />
      <Section
        titleMent="Hello? Wellcome To MBC!"
        ment="MBC (Music Bilboard Chart)에 오신 것을 환영합니다!"
        mentClass="ment ment_1 startMent"
      ></Section>
      <Section
        titleMent="이제 힘들게😫 하나씩 찾아 볼 필요 없어요!"
        ment="국내에 있는 음악 스트리밍 사이트의 집합체!"
        mentClass="ment ment_2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
        </svg>
      </Section>
      <Section
        titleMent="음악 스트리밍 사이트의 인기 순위를 한눈에 볼 수 있는 곳"
        ment="국내에 서비스 중인 음악 스트리밍 사이트의 인기 순위를 한눈에 볼 수 있어요"
        mentClass="ment ment_3"
      ></Section>
    </div>
  );
};

export default App;
