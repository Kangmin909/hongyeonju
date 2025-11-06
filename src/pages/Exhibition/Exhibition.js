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
    { id: 1, year: '2023', title: '슬다: 타인의 시선, 내 안의 자아', date: '2023.07.19 - 10.19', location: '카페 언트 (경기 과천시 남태령옛길 97)', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB.png' },
    { id: 2, year: '2025', title: '눈과 입을 막는다', date: '2025.08.03 - 10', location: '마포아트센터 갤러리 (서울 마포구 대흥동 30-3)', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F1.png' },
    { id: 3, year: '2024', title: 'Cosmos', date: '23.12.26 - 24.03.26', location: '레끌레드 크리스탈 삼성점 (서울 강남구 삼성로 95길 24)', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB.png' },
    { id: 4, year: '2025', title: "그림생각(들)", date: '25.06.03 - 06.08', location: '홍익대학교 제4공학관 T202 - T211', link: 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EA%B7%B8%EB%A6%BC%EC%83%9D%EA%B0%81(%EB%93%A4)%2F1.png' }
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
