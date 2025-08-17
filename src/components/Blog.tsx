import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import './Blog.css'; // Temporarily commented out to check for CSS conflicts
import { t, getLangFromPath } from '../utils/i18n';

const Blog: React.FC = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname, 'en');
  
  // Initialize newsSlides immediately with current language
  const newsSlides = [
    {
      image: '/images/news/news-1.jpg',
      title: t(lang as any, 'home.news.slide1.title'),
      text: t(lang as any, 'home.news.slide1.text'),
      link: '/blog',
    },
    {
      image: '/images/news/news-2.jpg',
      title: t(lang as any, 'home.news.slide2.title'),
      text: t(lang as any, 'home.news.slide2.text'),
      link: '/blog',
    },
  ];

  // News carousel state - Same as Home Page
  const [newsIndex, setNewsIndex] = useState(0);

  const handlePrevNews = () => setNewsIndex((prev) => (prev === 0 ? newsSlides.length - 1 : prev - 1));
  const handleNextNews = () => setNewsIndex((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1));

  return (
    <div style={{marginTop: '80px', background: '#fafafa', minHeight: '100vh'}}>
      {/* Hero Section - Matching Our Story Design */}
      <section style={{position: 'relative', padding: '60px 0 40px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
          <div style={{position: 'relative', width: '100%', maxWidth: '800px', height: 'auto', minHeight: '320px', borderTop: '6px solid #2350d7', borderLeft: '6px solid #2350d7', borderBottom: '6px solid #2350d7', borderRight: 'none', padding: '40px', display: 'flex', alignItems: 'center', background: 'white'}}>
            <div style={{width: '100%'}}>
              <h2 style={{fontFamily: 'Montserrat,Century Gothic,Arial,sans-serif', fontWeight: '700', color: '#2350d7', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: '1.25', margin: '0 0 24px 0'}}>{t(lang as any, 'blog.heroTitle')}</h2>
              <h3 style={{fontFamily: 'Montserrat,Century Gothic,Arial,sans-serif', color: '#2350d7', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: '700', margin: '0 0 12px 0'}}>{t(lang as any, 'blog.heroSubtitle')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - Same as Home Page */}
      <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px 0', background: '#f7f7f7', minHeight: '400px'}}>
        <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content', maxWidth: '100%', margin: '0 auto'}}>
          <button
            onClick={handlePrevNews}
            style={{
              position: 'absolute',
              left: '-48px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'saturate(140%) blur(2px)',
              border: '2px solid #2350d7',
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
              color: 'transparent',
              fontSize: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2350d7';
              e.currentTarget.style.borderColor = '#2350d7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.borderColor = '#2350d7';
            }}
          >
            <div style={{width: '14px', height: '14px', borderTop: '3px solid #2350d7', borderRight: '3px solid #2350d7', transform: 'rotate(-135deg)'}}></div>
          </button>
          
          <div style={{display: 'flex', flexDirection: 'row', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', borderRadius: '24px', overflow: 'hidden', background: '#fff', width: '1000px', height: '400px', maxWidth: '90vw', minWidth: '0', margin: '0 auto'}}>
            <div style={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaeaea'}}>
              <img 
                src={newsSlides[newsIndex].image}
                alt="News"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                onError={(e) => {
                  console.log('Image failed to load:', e.target);
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#ccc';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.style.color = '#666';
                  target.style.fontSize = '14px';
                  target.alt = 'Image failed to load';
                }}
              />
            </div>
            <div style={{width: '50%', height: '100%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff'}}>
              <h3 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}}>{newsSlides[newsIndex].title}</h3>
              <p style={{fontSize: '1.2rem', color: '#333', marginBottom: '32px', lineHeight: '1.7'}}>{newsSlides[newsIndex].text}</p>
              <a href={newsSlides[newsIndex].link} style={{alignSelf: 'flex-start', background: '#e15b64', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'background 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.background = '#b93c45'} onMouseLeave={(e) => e.currentTarget.style.background = '#e15b64'}>{t(lang as any, 'home.news.readMore')}</a>
            </div>
          </div>
          
          <button
            onClick={handleNextNews}
            style={{
              position: 'absolute',
              right: '-48px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'saturate(140%) blur(2px)',
              border: '2px solid #2350d7',
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
              color: 'transparent',
              fontSize: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2350d7';
              e.currentTarget.style.borderColor = '#2350d7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.borderColor = '#2350d7';
            }}
          >
            <div style={{width: '14px', height: '14px', borderTop: '3px solid #2350d7', borderRight: '3px solid #2350d7', transform: 'rotate(45deg)'}}></div>
          </button>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '18px', gap: '12px', width: '100%'}}>
          {newsSlides.map((_, idx) => (
            <span key={idx} style={{width: '18px', height: '18px', borderRadius: '50%', background: newsIndex === idx ? '#2350d7' : '#555', opacity: newsIndex === idx ? '1' : '0.25', display: 'inline-block', transition: 'background 0.2s, opacity 0.2s'}}></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog; 