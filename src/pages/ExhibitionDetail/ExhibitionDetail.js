import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './ExhibitionDetail.css';
import MediaDisplay from '../../components/MediaDisplay';
import arrowIcon from '../../assets/icons/back-arrow.png'; // 실제 아이콘 경로에 맞게 수정

const ExhibitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const exhibitions = [
    { 
      id: 1, 
      title: "EXHIBITION",
      subtitle: "아트그라운드 서울 2024",
      date: "2024.10.31 - 11.03",
      location: "노들섬 노들갤러리 1,2관",
      description: "'대한민국 청년미술축제 : 아트그라운드 서울 2024'는 다양하고 폭넓은 장르의 미술 작품을 시민들에게 소개하고 예술가와 관람객의 능동적인 소통을 기반으로 한 전시를 기획하여 본질적으로는 작가들의 작품활동 환경 개성과 서울 시민의 문화적 소양 증대, 작품 향유로 인한 다양한 긍정적인 효과를 꾀하기 위해 기획되었다. 유명세를 떠나 질적으로 훌륭한 여러 청/장년 아티스트의 작품 전시와 더불어 멘토링 프로그램, 아티스트 토크, 관람객 참여 프로그램 등으로 작가, 관람객 등 함께 모두가 어울려 즐길 수 있는 놀이터같은 축제이다.",
      images: [
        { id: 1, label: "이미지", title: "작품 제목 1", meta: "사이즈, 재료, 2024", url: "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg" },
        { id: 2, label: "이미지", title: "작품 제목 2", meta: "사이즈, 재료, 2024", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/test1.png" },
        { id: 3, label: "이미지", title: "작품 제목 3", meta: "사이즈, 재료, 2024", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/test2.png" },
        { id: 4, label: "이미지", title: "작품 제목 4", meta: "사이즈, 재료, 2024", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%EA%B3%A0%EC%96%91%EC%9D%B4%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-05-18%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.44.44.png" }
      ]
    },
    { 
      id: 2, 
      title: "EXHIBITION",
      subtitle: "슬다 / 타인의 시선, 내 안의 자아",
      date: "2023.07.19 - 10.19",
      location: "카페 언트 (경기 과천시 남태령옛길 97)",
      description: "홍연주 작가는 사람들이 형성하는 자아와 관계성에 대한 주제를 중심으로 작품을 창작합니다. 작가는 사람들이 타인, 환경, 경험 등의 영향을 받아서 자아를 형성한다는 것을 인식하고, 이를 바탕으로 자아 형성 과정에서의 주요 장면을 포착해내는데 주력합니다. 개인주의적인 사회에서 자신을 정의내리는 과정에서 발생하는 문제들을 그림을 통해 보여주는데, 이를 통해 관객들이 자신의 삶과 관계를 되돌아보고, 새로운 시각을 얻을 수 있도록 돕습니다. 또한, 동양화 재료를 활용하여 새로운 시감각적인 즐거움과 새로움을 선사하는 회화적 연구를 이어가고 있습니다.",
      images: [
        { id: 1, label: "이미지", title: "Cube1", meta: "133x138cm, 장지에 혼합재료, 2022", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FCube1%2C%20133*138cm%2C%20%EC%9E%A5%EC%A7%80%EC%97%90%20%ED%98%BC%ED%95%A9%EC%9E%AC%EB%A3%8C%2C%202022.png" },
        { id: 2, label: "이미지", title: "Cube2", meta: "161.8x130.2cm, 장지에 분채, 2022", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FCube2%2C%20%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8E%E1%85%A2%2C%20161.8x130.2cm%2C%202022.png" },
        { id: 3, label: "이미지", title: "Some white bread", meta: "72.5x91cm, 화판에 종이, 2022", url: "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/%ED%83%80%EC%9D%B8%EC%9D%98%20%EC%8B%9C%EC%84%A0%2C%20%EB%82%B4%20%EC%95%88%EC%9D%98%20%EC%9E%90%EC%95%84%2FSome%20white%20bread%2C%20%E1%84%92%E1%85%AA%E1%84%91%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6%20%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B5%2C%2072.5x91cm%2C%202022.png" }
      ]
    }
  ];

  const exhibition = exhibitions.find((ex) => ex.id === parseInt(id, 10));

  const handleBackClick = () => {
    const queryParams = new URLSearchParams(location.search);
    const year = queryParams.get('year') || '2021';
    navigate(`/exhibition?year=${year}`);
  };

  if (!exhibition) {
    return <div>전시 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="exhibition-detail-page">
      <div className="exhibition-detail-back-arrow" onClick={() => navigate(-1)}>
        <img src={arrowIcon} alt="Back Arrow" className="arrow-icon" />
      </div>
      
      <div className="exhibition-detail-header">
        <h1 className="exhibition-detail-title">{exhibition.title}</h1>
        <h2 className="exhibition-detail-subtitle">{exhibition.subtitle}</h2>
      </div>

      <div className="exhibition-detail-info">
        <div className="exhibition-detail-date">{exhibition.date}</div>
        <div className="exhibition-detail-location">{exhibition.location}</div>
        <p className="exhibition-detail-description">{exhibition.description}</p>
      </div>

      <div className="exhibition-detail-images">
        {exhibition.images.map((image) => (
          <div key={image.id} className="exhibition-detail-image-container">
            <MediaDisplay src={image.url} alt={image.label} className="exhibition-detail-image" />
            <div className="exhibition-detail-work-info">
              <div className="exhibition-detail-work-title">{image.title}</div>
              <div className="exhibition-detail-work-meta">{image.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionDetail;
