import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { getLangFromPath, t } from '../utils/i18n';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  // About card ref
  const aboutCardRef = useRef<HTMLDivElement>(null);
  // Ingredient card refs
  const roseRef = useRef<HTMLDivElement>(null);
  const lemonRef = useRef<HTMLDivElement>(null);
  const pistachioRef = useRef<HTMLDivElement>(null);
  const oliveRef = useRef<HTMLDivElement>(null);
  // Ingredient image refs
  const mainImgRef = useRef<HTMLImageElement>(null);
  const roseImgRef = useRef<HTMLImageElement>(null);
  const lemonImgRef = useRef<HTMLImageElement>(null);
  const pistachioImgRef = useRef<HTMLImageElement>(null);
  const oliveImgRef = useRef<HTMLImageElement>(null);
  // Why Unique section refs
  const uniqueHeadingRef = useRef<HTMLHeadingElement>(null);
  const uniqueCard1Ref = useRef<HTMLDivElement>(null);
  const uniqueCard2Ref = useRef<HTMLDivElement>(null);
  const uniqueCard3Ref = useRef<HTMLDivElement>(null);
  // Essence and Symphony image refs
  const essenceImg1Ref = useRef<HTMLDivElement>(null);
  const essenceImg2Ref = useRef<HTMLDivElement>(null);
  const essenceImg3Ref = useRef<HTMLDivElement>(null);
  const symphonyImg1Ref = useRef<HTMLDivElement>(null);
  const symphonyImg2Ref = useRef<HTMLDivElement>(null);
  const symphonyImg3Ref = useRef<HTMLDivElement>(null);
  // News card refs
  const newsImageRef = useRef<HTMLDivElement>(null);
  const newsTextRef = useRef<HTMLDivElement>(null);

  // News carousel state
  const [newsIndex, setNewsIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => (typeof window !== 'undefined' ? window.innerWidth < 900 : false));
  const newsSlides = [
    {
      image: '/images/news/news-1.jpg',
      title: t(lang, 'home.news.slide1.title'),
      text: t(lang, 'home.news.slide1.text'),
      link: '/blog',
    },
    {
      image: '/images/news/news-2.jpg',
      title: t(lang, 'home.news.slide2.title'),
      text: t(lang, 'home.news.slide2.text'),
      link: '/blog',
    },
    
  ];
  const handlePrevNews = () => setNewsIndex((prev) => (prev === 0 ? newsSlides.length - 1 : prev - 1));
  const handleNextNews = () => setNewsIndex((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1));

  // Cocktail and Contact section refs (last two sections)
  const cocktailCardRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const checkInView = (ref: React.MutableRefObject<Element | null>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight - 60) {
          ref.current.classList.add('in-view');
        } else {
          ref.current.classList.remove('in-view');
        }
      };
      checkInView(aboutCardRef);
      checkInView(mainImgRef);
      checkInView(roseRef);
      checkInView(lemonRef);
      checkInView(pistachioRef);
      checkInView(oliveRef);
      checkInView(roseImgRef);
      checkInView(lemonImgRef);
      checkInView(pistachioImgRef);
      checkInView(oliveImgRef);
      checkInView(uniqueHeadingRef);
      checkInView(uniqueCard1Ref);
      checkInView(uniqueCard2Ref);
      checkInView(uniqueCard3Ref);
      checkInView(essenceImg1Ref);
      checkInView(essenceImg2Ref);
      checkInView(essenceImg3Ref);
      checkInView(symphonyImg1Ref);
      checkInView(symphonyImg2Ref);
      checkInView(symphonyImg3Ref);
      checkInView(newsImageRef);
      checkInView(newsTextRef);
      checkInView(cocktailCardRef);
      checkInView(contactInfoRef);
      checkInView(contactFormRef);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-trigger news card animations on slide change
  useEffect(() => {
    const imageEl = newsImageRef.current;
    const textEl = newsTextRef.current;
    if (!imageEl || !textEl) return;
    imageEl.classList.remove('in-view');
    textEl.classList.remove('in-view');
    // Force reflow to restart CSS animation
    void imageEl.offsetWidth;
    void textEl.offsetWidth;
    imageEl.classList.add('in-view');
    textEl.classList.add('in-view');
  }, [newsIndex]);

  return (
    <div className="home" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-container">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div
          className="about-bg"
          style={{
            backgroundImage: "url('/images/WhatsAppImage2024-07-11at10.47.08AM1-300x225.jpeg')"
          }}
        ></div>
        <div className="about-content">
          <div className="about-card" ref={aboutCardRef}>
            <h2 className="about-heading">
              <span className="about-heading-main">DAMASCUS</span>
              <span className="about-heading-sub">GIN</span>
            </h2>
            <p className="about-text">
              {t(lang, 'home.about.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <div className="ingredients-grid">
          {/* Main bottle */}
          <div className="ingredient-center">
            <img 
              src="/images/ingredients/ingredient-main.jpg" 
              alt="Main Ingredient" 
              className="ingredient-image main"
              ref={mainImgRef}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          {/* Rose - top left */}
          <div className="ingredient-spot rose">
            <img 
              src="/images/ingredients/ingredient-2.jpg" 
              alt="Rose" 
              className="ingredient-image"
              ref={roseImgRef}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="ingredient-card rose-card" ref={roseRef}>
              {t(lang, 'home.ingredients.rose')}
            </div>
          </div>
          {/* Lemon - top right */}
          <div className="ingredient-spot lemon">
            <img 
              src="/images/ingredients/ingredient-1.jpg" 
              alt="Lemon" 
              className="ingredient-image"
              ref={lemonImgRef}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="ingredient-card lemon-card" ref={lemonRef}>
              {t(lang, 'home.ingredients.lemon')}
            </div>
          </div>
          {/* Pistachio - bottom left */}
          <div className="ingredient-spot pistachio">
            <img 
              src="/images/ingredients/ingredient-4.jpg" 
              alt="Pistachio" 
              className="ingredient-image"
              ref={pistachioImgRef}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="ingredient-card pistachio-card" ref={pistachioRef}>
              {t(lang, 'home.ingredients.pistachio')}
            </div>
          </div>
          {/* Olive - bottom right */}
          <div className="ingredient-spot olive">
            <img 
              src="/images/ingredients/ingredient-3.jpg" 
              alt="Olive" 
              className="ingredient-image"
              ref={oliveImgRef}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="ingredient-card olive-card" ref={oliveRef}>
              {t(lang, 'home.ingredients.juniper')}
            </div>
          </div>
        </div>
      </section>

      {/* Why Unique Section */}
      <section className="why-unique">
        <div className="why-unique-content">
          <h2 className="why-unique-title gold" ref={uniqueHeadingRef}>{t(lang, 'home.unique.title')}</h2>
          <div className="why-unique-cards">
            <div className="why-unique-card blue-card" ref={uniqueCard1Ref}>
              {t(lang, 'home.unique.card1')}
            </div>
            <div className="why-unique-card blue-card" ref={uniqueCard2Ref}>
              {t(lang, 'home.unique.card2')}
            </div>
            <div className="why-unique-card blue-card" ref={uniqueCard3Ref}>
              {t(lang, 'home.unique.card3')}
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="essence">
        <div className="essence-content">
          <div className="essence-shape"></div>
          <div className="essence-text">
            <h3 className="essence-title">{t(lang, 'home.essence.title')}</h3>
            <p className="essence-description">
              {t(lang, 'home.essence.desc')}
            </p>
            <a href="/our-story" className="essence-cta">{t(lang, 'home.essence.cta')}</a>
          </div>
          <div className="essence-gallery">
            <div className="essence-image" ref={essenceImg1Ref} style={{backgroundImage: 'url(/images/essence/essence-1.jpg)'}}></div>
            <div className="essence-image" ref={essenceImg2Ref} style={{backgroundImage: 'url(/images/essence/essence-2.jpg)'}}></div>
            <div className="essence-image" ref={essenceImg3Ref} style={{backgroundImage: 'url(/images/essence/essence-3.jpg)'}}></div>
          </div>
        </div>
      </section>

      {/* Symphony Section */}
      <section className="symphony">
        <div className="symphony-content">
          <div className="symphony-shape"></div>
          <div className="symphony-text">
            <h3 className="symphony-title">{t(lang, 'home.symphony.title')}</h3>
            <p className="symphony-description">
              {t(lang, 'home.symphony.desc')}
            </p>
          </div>
          <div className="symphony-gallery">
            <div className="symphony-image" ref={symphonyImg1Ref} style={{backgroundImage: 'url(/images/symphony/symphony-1.jpg)'}}></div>
            <div className="symphony-image" ref={symphonyImg2Ref} style={{backgroundImage: 'url(/images/symphony/symphony-2.jpg)'}}></div>
            <div className="symphony-image" ref={symphonyImg3Ref} style={{backgroundImage: 'url(/images/symphony/symphony-3.jpg)'}}></div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="news-cards-outer" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content', maxWidth: '100%', margin: '0 auto', overflow: 'hidden'}}>
          <button
            className="news-nav news-nav-left"
            onClick={handlePrevNews}
            aria-label="Previous News"
            style={{
              position: 'absolute',
              left: isSmallScreen ? '8px' : '-48px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2
            }}
          >&#8592;</button>
          <div className="news-cards">
            <div className="news-card-image" ref={newsImageRef}>
              <img 
                src={newsSlides[newsIndex].image}
                alt="News"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="news-card-text" ref={newsTextRef}>
              <h3>{newsSlides[newsIndex].title}</h3>
              <p>{newsSlides[newsIndex].text}</p>
              <a href={newsSlides[newsIndex].link} className="news-card-btn">{t(lang, 'home.news.readMore')}</a>
            </div>
          </div>
          <button
            className="news-nav news-nav-right"
            onClick={handleNextNews}
            aria-label="Next News"
            style={{
              position: 'absolute',
              right: isSmallScreen ? '8px' : '-48px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2
            }}
          >&#8594;</button>
        </div>
        <div className="news-dots">
          {newsSlides.map((_, idx) => (
            <span key={idx} className={`news-dot${newsIndex === idx ? ' active' : ''}`}></span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-content">
          <div className="contact-info" ref={contactInfoRef}>
            <h2>{t(lang, 'home.contact.title')}</h2>
            <h3>{t(lang, 'home.contact.subtitle')}</h3>
            <p>{t(lang, 'home.contact.desc')}</p>
          </div>
          <div className="contact-form" ref={contactFormRef}>
            <h4>{t(lang, 'home.contact.formTitle')}</h4>
            <form>
              <div className="contact-form-group">
                <label htmlFor="email">{t(lang, 'home.contact.email')}</label>
                <input type="email" id="email" name="email" placeholder="Enter a valid email address" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">{t(lang, 'home.contact.message')}</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="contact-submit">{t(lang, 'home.contact.submit')}</button>
            </form>
            <div className="contact-social">
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:info@damascusgin.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 Damascus Gin. All rights reserved. Please drink responsibly.
          </p>
          <p className="powered-by">
            {t(lang, 'footer.powered')} <a href="https://elyptek.com" target="_blank" rel="noopener noreferrer">{t(lang, 'footer.brand')}</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 