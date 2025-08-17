import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';
import { t, getLangFromPath } from '../utils/i18n';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lang, setLang] = useState<string>('en');
  const location = useLocation();

  useEffect(() => {
    const current = getLangFromPath(location.pathname, 'en');
    setLang(current);
  }, [location.pathname]);

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/Untitled-110.webp',
      alt: 'Damascus Gin Bottle Close-up',
      title: 'Damascus Gin Bottle',
      category: 'presentation',
      description: 'Our signature bottle in all its glory'
    },
    {
      id: 2,
      src: '/images/gallery/Untitled16.webp',
      alt: 'Damascus Gin Production',
      title: 'Production Process',
      category: 'craft',
      description: 'Behind the scenes of our craft'
    },
    {
      id: 3,
      src: '/images/gallery/Untitled-9.webp',
      alt: 'Damascus Rose Flowers',
      title: 'Damascus Rose',
      category: 'ingredients',
      description: 'The essence of our gin'
    },
    {
      id: 4,
      src: '/images/gallery/2.webp',
      alt: 'Damascus Gin Ingredients',
      title: 'Premium Ingredients',
      category: 'ingredients',
      description: 'Carefully selected botanicals'
    },
    {
      id: 5,
      src: '/images/gallery/3.webp',
      alt: 'Damascus Gin Distillation',
      title: 'Distillation Process',
      category: 'craft',
      description: 'Traditional craftsmanship'
    },
    {
      id: 6,
      src: '/images/gallery/6.webp',
      alt: 'Damascus Gin Presentation',
      title: 'Damascus Gin Presentation',
      category: 'presentation',
      description: 'Elegant presentation and packaging'
    },
    {
      id: 7,
      src: '/images/gallery/1 (1).webp',
      alt: 'Damascus Gin Experience',
      title: 'Damascus Gin Experience',
      category: 'presentation',
      description: 'The complete Damascus Gin experience'
    }
  ];

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <div className="gallery">
      {/* Hero Section - Matching Our Story Design */}
      <section className="gallery-hero">
        <div className="container-grid">
          <div className="corners">
            <div className="text-content">
              <h2 className="title">{t(lang as any, 'gallery.heroTitle')}</h2>
              <h3 className="subtitle">{t(lang as any, 'gallery.heroSubtitle')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <span className="view-btn">{t(lang as any, 'gallery.viewImage')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="modal-image">
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              />
            </div>
            <div className="modal-info">
              <h3>{galleryImages.find(img => img.id === selectedImage)?.title}</h3>
              <p>{galleryImages.find(img => img.id === selectedImage)?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 