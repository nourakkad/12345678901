import React, { useState, useCallback } from 'react';
import './Gallery.css';
import { getLangFromPath, t } from '../utils/i18n';

const Gallery: React.FC = () => {
  const lang = getLangFromPath(window.location.pathname);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryData = [
    {
      id: 1,
      title: 'Damascus Gin Bottle',
      description: 'Our signature gin bottle featuring traditional Middle Eastern design elements',
      image: '/images/gallery/Untitled-110.webp',
      category: 'bottles'
    },
    {
      id: 2,
      title: 'Craft Distillation Process',
      description: 'Behind the scenes of our traditional distillation methods',
      image: '/images/gallery/Untitled16.webp',
      category: 'process'
    },
    {
      id: 3,
      title: 'Botanical Selection',
      description: 'Carefully selected botanicals from the Mediterranean region',
      image: '/images/gallery/Untitled-9.webp',
      category: 'ingredients'
    },
    {
      id: 4,
      title: 'Damascus Gin Ingredients',
      description: 'Premium ingredients and botanicals used in our distillation process',
      image: '/images/gallery/2.webp',
      category: 'ingredients'
    },
    {
      id: 5,
      title: 'Distillation Process',
      description: 'Traditional craftsmanship in our distillation facility',
      image: '/images/gallery/3.webp',
      category: 'process'
    },
    {
      id: 6,
      title: 'Damascus Gin Presentation',
      description: 'Elegant presentation and packaging of our signature gin',
      image: '/images/gallery/6.webp',
      category: 'bottles'
    },
    {
      id: 7,
      title: 'Damascus Gin Experience',
      description: 'The complete Damascus Gin experience and tasting',
      image: '/images/gallery/1 (1).webp',
      category: 'experience'
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Add keyboard event listener for ESC key
  React.useEffect(() => {
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
              <h2 className="title">{t(lang, 'gallery.heroTitle')}</h2>
              <h3 className="subtitle">{t(lang, 'gallery.heroSubtitle')}</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="gallery-section">
          <div className="gallery-grid">
            {galleryData.map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => openModal(item.image)}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/damascus-gin-logo.png';
                  }}
                />
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Gallery" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 