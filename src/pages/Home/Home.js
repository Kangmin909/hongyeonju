// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import MediaDisplay from '../../components/MediaDisplay';
import { SkeletonHomeImage } from '../../components/Skeleton';
import ImageModal from '../../components/ImageModal';
import './Home.css';

// const homeImage = 'https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/ax7gxa1iogyu/b/hongyoenju/o/home%2F_talkv_wsD01179bG_S7FWNRcrSnMKxzHxW3GNAk_talkv_high_1.mp4';
// const homeImage = 'https://www.youtube.com/watch?v=l9D1HPb6kVA';
// const homeImage = 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg';


const Home = () => {
  const navigate = useNavigate();
  const { home, fetchAllData, toggleMenu } = useAppData();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Home 화면에서 모든 데이터를 한 번에 fetch
  useEffect(() => {
    if (!home) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [home, fetchAllData]);

  const homeImage = home?.link;

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-name">HONG<br />YEONJU</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div className="image-placeholder">

        {!home ? (
          <SkeletonHomeImage />
        ) : (
          <MediaDisplay 
            src={homeImage} 
            alt="Home media" 
            className="profile-image" 
            autoplay={true} 
            onClick={() => setSelectedMedia({ src: homeImage, alt: "Home media" })}
          />
        )}
      </div>

      {selectedMedia && (
        <ImageModal 
          src={selectedMedia.src} 
          alt={selectedMedia.alt} 
          onClose={() => setSelectedMedia(null)} 
        />
      )}
    </div>
  );
};

export default Home;
