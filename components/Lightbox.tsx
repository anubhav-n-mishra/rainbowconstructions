'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  title: string;
  onClose: () => void;
}

export default function Lightbox({ images, title, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrev = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [goToPrev, goToNext, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipe = 50;
    if (diff > minSwipe) {
      goToNext();
    } else if (diff < -minSwipe) {
      goToPrev();
    }
  };

  return (
    <div
      className="lightbox-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <div className="lightbox-container">
        {/* Header */}
        <div className="lightbox-header">
          <h3 className="lightbox-title">{title}</h3>
          <span className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image area */}
        <div
          className="lightbox-image-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="lightbox-nav lightbox-nav-left"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="lightbox-image-container">
            {isLoading && <div className="lightbox-spinner" />}
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - Photo ${currentIndex + 1}`}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <button
            className="lightbox-nav lightbox-nav-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="lightbox-thumbnails">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`lightbox-thumb ${idx === currentIndex ? 'lightbox-thumb-active' : ''}`}
              onClick={() => {
                setIsLoading(true);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to photo ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="60px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
