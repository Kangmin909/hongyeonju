import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };

  const aboutText = `동양화(고스톱 맞음)를 전공한 작가는 전통적인 동양화 재료가 가진 물성과 그 특이점에 주목하며, 이를 현대적인 회화 작업으로 확장하는 방법을 모색한다. 동양화는 본래 매체의 경계가 유연한 특성을 지니고 있으며, 이러한 개방성을 극대화하는 방식으로 재료가 가진 물성을 실험적으로 탐구하는 작업을 지속하고 있다. 이를 통해 동양화의 고유한 언어를 현대적인 맥락에서 재해석하고, 기존의 형식적 틀을 넘어 동시대적 조형 언어로 구축해 나가고자 한다. 단순히 전통성을 띄는 형식적 특징을 넘어 탈영토화를 이끌어냄으로써 현대 동양화를 발전시키고 스스로 정립하고자 하는 과정이다. 작업의 표면에서는 동시대를 살아가는 작가 개인의 경험과 사유가 집약적으로 드러난다. 특히, 삶 속에 침투해 지속적인 영향을 주고받는 유기체와의 관계성에 주목하는데, 공간과 인물, 그리고 '나'라는 주체 사이의 크고작은 연결 지점을 시각적으로 재해석한다. 이러한 사유방식은 생성론적 관점에서 출발하며, 만물은 서로 영향을 주고받으며 끊임없이 변화하는 존재라는 사고를 기반으로 한다. 작가는 이 과정에서 대상의 유기적인 흐름과 위치를 고찰하는 단계를 통해 형태소로써 존재하는 자신을 평면회화로 드러낸다.`;

  return (
    <div className="about-page">
      <div className="about-menu-button" onClick={handleBackClick}>
        <div className="about-menu-line"></div>
        <div className="about-menu-line"></div>
        <div className="about-menu-line"></div>
      </div>

      <h1 className="about-title">ABOUT</h1>

      <div>
        <h2 className="about-section-title">MAIL</h2>
        <p className="about-contact-info">hongyj0906@gmail.com</p>
      </div>

      <div>
        <h2 className="about-section-title">INSTAGRAM</h2>
        <p className="about-contact-info">@hongyeonjuuu</p>
      </div>

      <div className="about-text-section">
        <h2 className="about-section-title">TEXT</h2>
        <p className="about-text-content">{aboutText}</p>
      </div>
    </div>
  );
};

export default About;
