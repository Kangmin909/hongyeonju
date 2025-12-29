import React, { useEffect, useState, useRef, useCallback } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [viewportStyle, setViewportStyle] = useState({});
  
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const pinchStartDist = useRef(0);
  const initialZoom = useRef(1);
  const viewportRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getClampedOffset = useCallback((newX, newY, currentZoom) => {
    if (!viewportRef.current) return { x: newX, y: newY };
    const vWidth = viewportRef.current.offsetWidth;
    const vHeight = viewportRef.current.offsetHeight;
    const iWidth = vWidth * currentZoom;
    const iHeight = vHeight * currentZoom;
    
    let maxX = 0, maxY = 0;
    if (iWidth > vWidth) maxX = (iWidth - vWidth) / 2;
    if (iHeight > vHeight) maxY = (iHeight - vHeight) / 2;
    
    return {
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY))
    };
  }, []);

  const handleMediaLoad = (e) => {
    setLoading(false);
    const target = e.target;
    const width = target.videoWidth || target.naturalWidth || target.offsetWidth;
    const height = target.videoHeight || target.naturalHeight || target.offsetHeight;
    
    if (width && height) {
      const ratio = width / height;
      const winW = window.innerWidth * 0.85;
      const winH = window.innerHeight * 0.75;
      
      let finalW, finalH;
      if (ratio > winW / winH) {
        finalW = winW;
        finalH = winW / ratio;
      } else {
        finalH = winH;
        finalW = winH * ratio;
      }
      
      setViewportStyle({ 
        width: `${Math.round(finalW)}px`, 
        height: `${Math.round(finalH)}px`
      });
    }
  };

  if (!src) return null;

  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  const handleStart = (e) => {
    if (e.touches && e.touches.length === 2) {
      pinchStartDist.current = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      initialZoom.current = zoom;
    } else {
      isDragging.current = true;
      hasMoved.current = false;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      lastPos.current = { x: clientX, y: clientY };
    }
  };

  const handleMove = (e) => {
    if (e.touches && e.touches.length === 2) {
      if (pinchStartDist.current === 0) return;
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const newZoom = Math.min(Math.max(initialZoom.current * (dist / pinchStartDist.current), 1), 5);
      setZoom(newZoom);
      if (newZoom === 1) setOffset({ x: 0, y: 0 });
      else setOffset(prev => getClampedOffset(prev.x, prev.y, newZoom));
    } else if (isDragging.current && zoom > 1) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) hasMoved.current = true;
      
      setOffset(prev => getClampedOffset(prev.x + dx, prev.y + dy, zoom));
      lastPos.current = { x: clientX, y: clientY };
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    pinchStartDist.current = 0;
  };

  const handleWheel = (e) => {
    if (isVideo || isYouTube || !viewportRef.current) return;
    
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 5);
    
    if (newZoom === zoom) return;

    if (newZoom === 1) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const ratio = newZoom / zoom;
    const newX = mouseX - (mouseX - offset.x) * ratio;
    const newY = mouseY - (mouseY - offset.y) * ratio;

    setZoom(newZoom);
    setOffset(getClampedOffset(newX, newY, newZoom));
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (isVideo || isYouTube || hasMoved.current) return;

    if (zoom > 1) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    } else {
      const rect = viewportRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      
      const targetZoom = 2.5;
      const targetX = -x * (targetZoom - 1);
      const targetY = -y * (targetZoom - 1);
      
      setZoom(targetZoom);
      setOffset(getClampedOffset(targetX, targetY, targetZoom));
    }
  };

  const renderContent = () => {
    const style = {
      transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
      transition: (isDragging.current || pinchStartDist.current > 0) ? 'none' : 'transform 0.25s ease-out'
    };
    const events = { 
      onMouseDown: handleStart, onMouseMove: handleMove, onMouseUp: handleEnd, onMouseLeave: handleEnd, 
      onTouchStart: handleStart, onTouchMove: handleMove, onTouchEnd: handleEnd, onWheel: handleWheel
    };

    if (isYouTube) {
      const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
      return (
        <div className="media-movable-content" style={style} {...events}>
          <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title={alt || 'YouTube video'} className="media-modal-video" frameBorder="0" allowFullScreen onLoad={handleMediaLoad} />
        </div>
      );
    }
    if (isVideo) {
      return (
        <div className="media-movable-content" style={style} {...events}>
          <video src={src} className="media-modal-video" controls autoPlay onLoadedMetadata={handleMediaLoad} />
        </div>
      );
    }
    return (
      <div className="media-movable-content" style={style} {...events}>
        <img src={src} alt={alt || 'Full size'} className="image-modal-img-internal" onLoad={handleMediaLoad} onClick={handleImageClick} draggable="false" />
      </div>
    );
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-info">{isVideo || isYouTube ? 'Video View' : 'Image View'}</div>
      <div className="image-modal-wrapper">
        <div className="viewport-relative-container" style={viewportStyle}>
          <button className="viewport-close-btn" onClick={onClose} aria-label="Close">&times;</button>
          <div className="image-modal-viewport" ref={viewportRef} onClick={(e) => e.stopPropagation()}>
            {loading && <div className="modal-loader" />}
            {renderContent()}
          </div>
        </div>
      </div>
      {!isVideo && !isYouTube && (
        <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setZoom(prev => {
            const nz = Math.max(prev - 0.5, 1);
            if (nz === 1) setOffset({x:0, y:0});
            else setOffset(o => getClampedOffset(o.x, o.y, nz));
            return nz;
          })} className="control-btn-small">−</button>
          <span className="zoom-level-small" onClick={() => { setZoom(1); setOffset({x:0,y:0}); }} style={{ cursor: 'pointer' }}>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(prev => {
            const nz = Math.min(prev + 0.5, 5);
            setOffset(o => getClampedOffset(o.x, o.y, nz));
            return nz;
          })} className="control-btn-small">+</button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
