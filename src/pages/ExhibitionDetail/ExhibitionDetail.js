import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ExhibitionDetail.css';
import MediaDisplay from '../../components/MediaDisplay';
import arrowIcon from '../../assets/icons/back-arrow.png'; // 실제 아이콘 경로에 맞게 수정

const ExhibitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const exhibitions = [
    { 
      id: 1, 
      title: "EXHIBITION",
      subtitle: "슬다: 타인의 시선, 내 안의 자아",
      date: "2023.07.19 - 10.19",
      location: "카페 언트 (경기 과천시 남태령옛길 97)",
      description: "홍연주 작가는 사람들이 형성하는 자아와 관계성에 대한 주제를 중심으로 작품을 창작합니다. 작가는 사람들이 타인, 환경, 경험 등의 영향을 받아서 자아를 형성한다는 것을 인식하고, 이를 바탕으로 자아 형성 과정에서의 주요 장면을 포착해내는데 주력합니다. 개인주의적인 사회에서 자신을 정의내리는 과정에서 발생하는 문제들을 그림을 통해 보여주는데, 이를 통해 관객들이 자신의 삶과 관계를 되돌아보고, 새로운 시각을 얻을 수 있도록 돕습니다. 또한, 동양화 재료를 활용하여 새로운 시감각적인 즐거움과 새로움을 선사하는 회화적 연구를 이어가고 있습니다.",
      images: [
        { id: 1, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F1.png" },
        { id: 2, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F2.png" },
        { id: 3, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F3.png" },
        { id: 4, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F4.png" },
        { id: 5, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F5.png" },
        { id: 6, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F6.png" },
        { id: 7, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F7.png" },
        { id: 8, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EC%8A%AC%EB%8B%A4%2F8.png" }
      ]
    },
    { 
      id: 2, 
      title: "EXHIBITION",
      subtitle: "눈과 입을 막는다",
      date: '2025.08.03 - 08.10',
      location: '마포아트센터 갤러리 (서울 마포구 대흥동 30-3)',
      description: "《눈과 입을 막는다》 에서 이서영, 이지이, 홍연주는 보이지 않고 말해지지 않는 감각의 층위에 주목한다. 세 작가는 직선적인 진술이 아닌 비껴선 감각을 통해 비가시적 본질을 탐구하며, 언어와 형식으로 감각화한다. 이들은 감춰진 기척을 사유로 전환하고, 개념을 평면 위로 이행시키는 방식으로 작업한다. 동양 매체를 수용하는 태도는 이들의 공통된 기반이 되며, 관람자에게 이미지 너머에 머무르며 감응하는 시간을 제안한다.",
      images: [
        { id: 1, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F2.png" },
        { id: 2, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F3.png" },
        { id: 3, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F4.png" },
        { id: 4, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F5.png" },
        { id: 5, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F6.png" },
        { id: 6, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EB%88%88%EA%B3%BC%20%EC%9E%85%EC%9D%84%20%EB%A7%89%EB%8A%94%2F7.png" },
      ]
    },
    { 
      id: 3, 
      title: "EXHIBITION",
      subtitle: "Cosmos",
      date: '23.12.26 - 24.03.26',
      location: '레끌레드 크리스탈 삼성점 (서울 강남구 삼성로 95길 24)',
      description: "크리스탈 그룹 와인들과 기존 내추럴와인 리스트들을 다양하게 만나보실 수 있는레끌레드 크리스탈 삼성점에서 홍연주 작가님의 개인전 'Cosmos' 가 진행됩니다. 시간이 지나면서 변형되고 왜곡되어지는 과거의 기억들을 바탕으로 자아를 정의내리는 과정에서 발생하는 문제들을 도상적 표상으로 비춰내는 작업을 진행중이신 홍연주 작가님인데요. 관객들이 자신의 삶은 어떤 형상을 띄는지 더듬어보고 새로운 시각을 얻을 수 있도록 돕고싶으시다는 홍연주 작가님의 작품들을 레끌레드 크리스탈 삼성점에서 감상해보세요.",
      images: [
        { id: 1, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F1.png" },
        { id: 2, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F2.png" },
        { id: 3, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F3.png" },
        { id: 4, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F4.png" },
        { id: 5, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F5.png" },
        { id: 6, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F6.png" },
        { id: 7, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F7.png" },
        { id: 8, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F8.png" },
        { id: 9, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2FCosmos%2F9.png" }
      ]
    },
    { 
      id: 4, 
      title: "EXHIBITION",
      subtitle: "그림생각(들)",
      date: '25.06.03 - 06.08',
      location: '홍익대학교 제4공학관 T202 - T211',
      description: "그림(picture)은 사라지지 않는다. 그림은 매체를 달리 하며, 다양한 몸을 입고 도처에 출몰해 왔다. 몸을 지녔으며 여기저기 나타나고, 사라 지지도 않는 것이 그림이라면. 그림이 특정 매체나 역할을 수행하는 장 치, 그릇보다는 살아 있는 실체나 타자에 가깝다면, 그림을 만들고 보이 는 일을 어떻게 이해해야 할까. 우리는 이미지와 그림을 대하는 일련의 태도와 욕망, 행동에 주목하며, 이를 '그림생각'이라고 불러본다. 그림을 그리는 사람은 모두 '그림생각'을 한다. 여기에 (자신과 친족의 모습을 그리는 몸짓이 있다.) (인과를 엮어 만든 이야기가 있다.) (지난 날에 머문 곳과 본 것을 떠올리는 생각 이 있다.) (수단과 목적이라는 말을 두고 고민하는 이가 있다.) (수집가 의 충동이 있다.) (앞선 그림에서 다른 세계를 찾는 눈과 손이 있다.) 작가들은 다른 무엇을 닮은 그림들을 만들었다. 미술사 안팎의 맥락에 발 딛고 선 그림들은 (세계의 상을 보이기도), (몸의 움직임을 추적하게 하기도), (역사와 기억을 성찰하게 하기도) 한다. 어떠한 반응을 원하거 나 거부하는 것처럼 보이는 이 그림들은 서로 다른 몸과 껍질을 마주하 며 전시장에 놓여 있다. 우리는 살아 있는 그림과 그것을 불러 오는 생각, 몸짓들을 느슨하게 묶 어 본다. 결론을 유보하며, 그들이 좇는 바에 주목해 본다. n개의 그림 생각(들)에 귀 기울인다.",
      images: [
        { id: 1, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EA%B7%B8%EB%A6%BC%EC%83%9D%EA%B0%81(%EB%93%A4)%2F2.png" },
        { id: 2, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EA%B7%B8%EB%A6%BC%EC%83%9D%EA%B0%81(%EB%93%A4)%2F3.png" },
        { id: 3, label: "이미지", title: "제목", meta: "크기, 재료, 연도", url: "https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/exhibition%2F%EA%B7%B8%EB%A6%BC%EC%83%9D%EA%B0%81(%EB%93%A4)%2F4.png" }
      ]
    }
  ];

  const exhibition = exhibitions.find((ex) => ex.id === parseInt(id, 10));

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
