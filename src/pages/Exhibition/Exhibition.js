import React, { useState, useEffect } from 'react';
import './Exhibition.css';
import { useNavigate, useLocation } from 'react-router-dom';
import MediaDisplay from '../../components/MediaDisplay';

const Exhibitions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 쿼리스트링에서 연도 읽기
  const queryParams = new URLSearchParams(location.search);
  const initialYear = queryParams.get('year') || '2025';
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const exhibitions = [
    { id: 1, year: '2024', title: '아트그라운드 서울 2024', date: '2024.10.31 - 11.03', location: '노들섬 노들갤러리 1,2관', link: 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg' },
    { id: 2, year: '2023', title: '슬다 / 타인의 시선, 내 안의 자아', date: '2023.07.19 - 10.19', location: '카페 언트 (경기 과천시 남태령옛길 97) ', link: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FCube1%2C%20133*138cm%2C%20%EC%9E%A5%EC%A7%80%EC%97%90%20%ED%98%BC%ED%95%A9%EC%9E%AC%EB%A3%8C%2C%202022.png'}
  ];

  const handleYearClick = (year) => {
    setSelectedYear(year);
    navigate(`/exhibition?year=${year}`);
  };

  const filteredExhibitions = exhibitions.filter((exhibition) => exhibition.year === selectedYear);

  const handleExhibitionClick = (exhibitionId) => {
    navigate(`/exhibition/${exhibitionId}`); // 전시 세부페이지로 이동
  };

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]); // URL이 바뀌면 selectedYear도 다시 세팅
  

  return (
    <div className="exhibitions-container">
      <header className="exhibitions-header">
        <h1 className="exhibitions-title">EXHIBITION</h1>
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

      <div className="exhibitions-list">
        {filteredExhibitions.map((exhibition) => (
          <div
            className="exhibition-item"
            key={exhibition.id}
            onClick={() => handleExhibitionClick(exhibition.id)}
            style={{ cursor: 'pointer' }}
          >
            <MediaDisplay src={exhibition.link} alt={exhibition.title} className="exhibition-image" autoplay={true} />
            <div className="exhibition-info">
              <div className="exhibition-title">{exhibition.title}</div>
              <div className="exhibition-date">{exhibition.date}</div>
              <div className="exhibition-location">{exhibition.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
