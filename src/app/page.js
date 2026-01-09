'use client';

import React, { useEffect, useState } from 'react';
import { useAppData } from '../context/AppDataContext';
import MediaDisplay from '../components/MediaDisplay';
import { SkeletonHomeImage } from '../components/Skeleton';
import ImageModal from '../components/ImageModal';
import VideoModal from '../components/VideoModal';
import menuIcon from '../assets/icons/menu-icon.svg';
import './page.css';

const Home = () => {
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

  const handleMediaClick = () => {
    if (!homeImage) return;
    const link = homeImage.toLowerCase();
    const isVideo = link.endsWith('.mp4') || link.includes('youtube.com') || link.includes('youtu.be');
    
    if (isVideo) {
      setSelectedMedia({ type: 'video', src: homeImage, alt: "Home media" });
    } else {
      setSelectedMedia({ type: 'image', items: [{ link: homeImage, title: "Home media" }], index: 0 });
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-name">HONG<br />YEONJU</div>
        <div className="common-menu-icon" onClick={toggleMenu}>
          <img 
            src={menuIcon.src || menuIcon} 
            alt="Menu" 
            className="menu-icon-img" 
            width="24" 
            height="24"
          />
        </div>
      </div>
      <div className="image-placeholder">
        {!home ? (
          <SkeletonHomeImage />
        ) : (
          <MediaDisplay 
            src={homeImage} 
            alt="Home media" 
            className="profile-image home-media-frame" 
            autoplay={true} 
            onClick={handleMediaClick}
          />
        )}
      </div>

      {selectedMedia?.type === 'image' && (
        <ImageModal 
          images={selectedMedia.items}
          initialIndex={selectedMedia.index}
          onClose={() => setSelectedMedia(null)} 
        />
      )}

      {selectedMedia?.type === 'video' && (
        <VideoModal 
          src={selectedMedia.src}
          alt={selectedMedia.alt}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default Home;
