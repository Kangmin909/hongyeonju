import React, { useState, useEffect } from 'react';
import './Works.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 쿼리스트링에서 연도 읽기
  const queryParams = new URLSearchParams(location.search);
  const initialYear = queryParams.get('year') || '2025';
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    navigate(`/works?year=${year}`);
  };

  const works = [
    { id: 1, year: '2021', title: '제목1', meta: '사이즈, 재료, 2021', link: 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg'},
    { id: 2, year: '2022', title: 'Cube1', meta: '133x138cm, 장지에 혼합재료, 2022', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FCube1%2C%20133*138cm%2C%20%EC%9E%A5%EC%A7%80%EC%97%90%20%ED%98%BC%ED%95%A9%EC%9E%AC%EB%A3%8C%2C%202022.png'},
    { id: 3, year: '2022', title: 'Cube2', meta: '161.8x130.2cm, 장지에 분채, 2022', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FCube2%2C%20%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8E%E1%85%A2%2C%20161.8x130.2cm%2C%202022.png'},
    { id: 4, year: '2022', title: 'Some white bread', meta: '72.5x91cm, 화판에 종이, 2022', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FSome%20white%20bread%2C%20%E1%84%92%E1%85%AA%E1%84%91%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6%20%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B5%2C%2072.5x91cm%2C%202022.png'},
    { id: 5, year: '2023', title: '다른 연도 작품', meta: '사이즈, 재료, 2023', link: 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg'},
    { id: 6, year: '2024', title: '비행', meta: '66x100(cm), 장지에 혼합재료, 2024', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/test%2F%E1%84%87%E1%85%B5%E1%84%92%E1%85%A2%E1%86%BC%2C%20%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%20%E1%84%92%E1%85%A9%E1%86%AB%E1%84%92%E1%85%A1%E1%86%B8%E1%84%8C%E1%85%A2%E1%84%85%E1%85%AD%2C%2066x100(cm)%2C%202024.png'},
    { id: 7, year: '2025', title: '무제', meta: '16x22.3(cm), 나무판넬에 오일파스텔,젯소,돌반죽, 2025', link: 'https://www.youtube.com/watch?v=l9D1HPb6kVA'},
    { id: 8, year: '2025', title: '일주일 기다린 저녁식사', meta: '53x33.5(cm), 나무 판넬에 오일파스텔, 젯소, 돌반죽, 2025', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/test%2F%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A1%E1%84%85%E1%85%B5%E1%86%AB%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A1%2C%2053x33.5(cm)%2C%20%EB%82%98%EB%AC%B4%20%ED%8C%90%EB%84%AC%EC%97%90%20%EC%98%A4%EC%9D%BC%ED%8C%8C%EC%8A%A4%ED%85%94%2C%20%EC%A0%AF%EC%86%8C%2C%20%EB%8F%8C%EB%B0%98%EC%A3%BD%2C%202025.png'},
  ];

  const filteredWorks = works.filter(work => work.year === selectedYear);

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]); // URL이 바뀌면 selectedYear도 다시 세팅

  const renderMedia = (src) => {
    if (!src) return null;

    // 🎥 유튜브 링크 처리
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      const embedUrl = src
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/");
      return (
        <iframe
          src={`${embedUrl}?autoplay=1&mute=1&loop=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="profile-image"
          title="Home video"
        ></iframe>
      );
    }

    // 🎬 mp4 (OCI 영상 등)
    if (src.endsWith(".mp4")) {
      return (
        <video
          src={src}
          className="work-image"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      );
    }

    // 🖼️ 이미지
    return <img src={src} alt="Home" className="work-image" />;
  };

  return (
    <div className="works-container">
      <header className="works-header">
        <h1 className="works-title">WORKS</h1>
        <div className="menu-icon" onClick={() => navigate('/menu')}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </header>

      <nav className="year-nav">
        {['2025', '2024', '2023', '2022', '2021'].map((year) => (
          <div
            key={year}
            className={`year ${selectedYear === year ? 'active' : ''}`}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </div>
        ))}
      </nav>

      <div className="works-list">
        {filteredWorks.map((work) => (
          <div className="work-item" key={work.id}>
            {renderMedia(work.link)}
            <div className="work-info">
              <div className="work-title">{work.title}</div>
              <div className="work-meta">{work.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
