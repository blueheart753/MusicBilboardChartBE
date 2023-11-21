import './App.css';
import './Anime.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Section from './Section';

const App = () => {
  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  });

  const addRemoveClassOnIntersection = (selector, className) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        item.isIntersecting
          ? item.target.classList.add(className)
          : item.target.classList.remove(className);
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
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
        titleMent="Hello? This is MBC!"
        ment="MBC (Music Bilboard Chart)에 오신 것을 환영합니다."
        mentClass="ment ment_1 startMent"
      ></Section>
      <Section
        titleMent="이제 힘들게😫 하나씩 찾아 볼 필요 없어요!"
        ment="국내에 있는 음악 스트리밍 사이트의 집합체!"
        mentClass="ment ment_2"
      ></Section>
      <Section
        titleMent="음악 스트리밍 사이트의 인기 순위를 한눈에 볼 수 있는 곳"
        ment="국내에 서비스 중인 음악 스트리밍 사이트의 인기 순위를 한눈에 볼 수 있어요"
        mentClass="ment ment_3"
      ></Section>
    </div>
  );
};

export default App;
