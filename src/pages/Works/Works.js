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
    { id: 1, year: '2022', title: 'Cube1', meta: '133x138(cm), 장지에 혼합재료, 2022', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2FCube1.png'},
    { id: 2, year: '2022', title: 'Some white bread', meta: '72.5x91(cm), 화판에 종이, 2022', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2FSome%20white%20bread.png'},
    { id: 3, year: '2023', title: 'Pearl', meta: '장지에 혼합재료, 66x100(cm), 2023', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2FPearl.png'},
    { id: 4, year: '2024', title: '광장1', meta: '장지에 혼합재료, 72.7x90.9(cm), 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC1.png'},
    { id: 5, year: '2024', title: '광장2', meta: '장지에 혼합재료, 72.7x90.9(cm), 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC2.png'},
    { id: 6, year: '2024', title: '애호가', meta: '장지에 혼합재료, 162x97(cm), 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%8B%E1%85%A2%E1%84%92%E1%85%A9%E1%84%80%E1%85%A1.png'},
    { id: 7, year: '2024', title: '수평선', meta: '장지에 혼합재료, 50x65(cm), 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%89%E1%85%AE%E1%84%91%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5%E1%86%AB.png'},
    { id: 8, year: '2024', title: '좆는 아이', meta: '린넨에 혼합재료, 130x97(cm), 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%8C%E1%85%A9%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5.png'},
    { id: 9, year: '2024', title: '치얼스', meta: '장지에 혼합재료, 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%A5%E1%86%AF%E1%84%89%E1%85%B3.png'},
    { id: 10, year: '2024', title: '벽으로부터', meta: '193.9x130.3(cm), 장지에 혼합재료, 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%87%E1%85%A7%E1%86%A8%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%E1%84%87%E1%85%AE%E1%84%90%E1%85%A5.png'},
    { id: 11, year: '2024', title: '낙하', meta: '80x100(cm), 장지에 혼합재료, 2024', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%82%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1.png'},
    { id: 12, year: '2025', title: '한 떨기 빛과 물은 흐르고', meta: '16x22.3(cm), 나무판넬에 오일파스텔,젯소,돌반죽, 2025', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%84%E1%85%A5%E1%86%AF%E1%84%80%E1%85%B5%20%E1%84%87%E1%85%B5%E1%86%BE%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%B3%E1%86%AB%20%E1%84%92%E1%85%B3%E1%84%85%E1%85%B3%E1%84%80%E1%85%A9.png'},
    { id: 13, year: '2025', title: '일주일 기다린 저녁식사', meta: '53x33.5(cm), 나무 판넬에 오일파스텔, 젯소, 돌반죽, 2025', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A1%E1%84%85%E1%85%B5%E1%86%AB%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A1.png'},
    { id: 14, year: '2025', title: '둘이 될 수 없는 하나', meta: '15x15(cm), 나무화판에 오일파스텔, 순지, 돌반죽, 2025', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/works%2F%E1%84%83%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%B5%20%E1%84%83%E1%85%AC%E1%86%AF%20%E1%84%89%E1%85%AE%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%92%E1%85%A1%E1%84%82%E1%85%A1.png'}
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
