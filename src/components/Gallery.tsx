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
      image: '/images/gallery/gallery-1.jpg',
      category: 'bottles'
    },
    {
      id: 2,
      title: 'Craft Distillation Process',
      description: 'Behind the scenes of our traditional distillation methods',
      image: '/images/gallery/gallery-2.jpg',
      category: 'process'
    },
    {
      id: 3,
      title: 'Botanical Selection',
      description: 'Carefully selected botanicals from the Mediterranean region',
      image: '/images/gallery/gallery-3.jpg',
      category: 'ingredients'
    },
    {
      id: 4,
      title: 'Damascus Gin Cocktail',
      description: 'Perfect gin and tonic with our signature spirit',
      image: '/images/gallery/gallery-4.jpg',
      category: 'cocktails'
    },
    {
      id: 5,
      title: 'Distillery Interior',
      description: 'Our state-of-the-art distillery facility',
      image: '/images/gallery/gallery-5.jpg',
      category: 'facility'
    },
    {
      id: 6,
      title: 'Gin Tasting Experience',
      description: 'Professional tasting sessions with our master distiller',
      image: '/images/gallery/gallery-6.jpg',
      category: 'events'
    },
    {
      id: 7,
      title: 'Damascus Gin Limited Edition',
      description: 'Special limited edition releases with unique packaging',
      image: '/images/gallery/gallery-7.jpg',
      category: 'bottles'
    },
    {
      id: 8,
      title: 'Cocktail Masterclass',
      description: 'Learn to create perfect cocktails with Damascus Gin',
      image: '/images/gallery/gallery-8.jpg',
      category: 'events'
    },
    {
      id: 9,
      title: 'Botanical Garden',
      description: 'Our botanical garden where we grow select ingredients',
      image: '/images/gallery/gallery-9.jpg',
      category: 'ingredients'
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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/gallery/placeholder.jpg';
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