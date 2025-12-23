// src/pages/Home.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonHomeImage } from '../../components/Skeleton';
import './Home.css';

// const homeImage = 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/home%2F_talkv_wsD01179bG_S7FWNRcrSnMKxzHxW3GNAk_talkv_high_1.mp4';
// const homeImage = 'https://www.youtube.com/watch?v=l9D1HPb6kVA';
// const homeImage = 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg';


const Home = () => {
  const navigate = useNavigate();
  const { home, loading, fetchAllData } = useAppData();
  // Home 화면에서 모든 데이터를 한 번에 fetch
  useEffect(() => {
    if (loading === true){
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const homeImage = home?.link;

// 📌 확장자/도메인 기준으로 src 타입 감지
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
          className="profile-image"
          autoPlay
          muted
          loop
          playsInline
          // controls
        />
      );
    }

    // 🖼️ 이미지
    return <img src={src} alt="Home" className="profile-image" />;
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-name">HONG<br />YEONJU</div>
        <div className="menu-icon" onClick={() => navigate('/menu')}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div className="image-placeholder">
        {loading || !homeImage ? (
          <SkeletonHomeImage />
        ) : (
          renderMedia(homeImage)
        )}
        {/* <MediaDisplay src={homeImage} alt="Home image" className="profile-image" autoplay={true} /> */}
      </div>
    </div>
  );
};

export default Home;
