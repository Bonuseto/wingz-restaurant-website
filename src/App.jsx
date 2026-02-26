import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const translations = {
  en: {
    nav: {
      menu: 'Menu',
      gallery: 'Gallery',
      location: 'Location',
      hours: 'Hours',
      contact: 'Contact'
    },
    hero: {
      title: 'Best Wings in Prague',
      slogan: 'CHICKEN WINGS & OTHER THINGS',
      subtitle: 'Authentic American-style wings served fresh daily in the heart of Holešovice',
      cta: 'View Menu'
    },
    info: {
      location: 'Location',
      rating: 'Customer Rating',
      hours: 'Opening Hours',
      locatedIn: 'Located in Hotel Olga',
      basedOn: 'Based on',
      reviews: 'reviews',
      days: 'Thursday - Sunday',
      time: '5:00 PM - 11:00 PM',
      service: 'Dine-in & Takeaway'
    },
    menu: {
      title: 'Full Menu',
      wings: {
        title: 'Chicken Wings',
        items: [
          { qty: '12 pcs', price: '239 Kč' },
          { qty: '18 pcs', price: '339 Kč' },
          { qty: '24 pcs', price: '429 Kč' },
          { qty: '30 pcs', price: '519 Kč' },
          { qty: '36 pcs', price: '609 Kč' },
          { qty: '50 pcs', price: '799 Kč' }
        ]
      },
      sandwiches: {
        title: 'Sandwiches',
        price: '289 Kč',
        items: [
          {
            name: 'Buffalo Chicken Burger',
            desc: 'Fried chicken strips in buffalo sauce, lettuce, tomatoes, onions, cucumbers, and blue cheese sauce'
          },
          {
            name: 'BBQ Chicken Burger',
            desc: 'Fried chicken strips in BBQ sauce, lettuce, tomatoes, onions, cucumbers, and American cheese'
          },
          {
            name: 'Chicken Bacon Ranch',
            desc: 'Fried chicken strips in ranch sauce, bacon, lettuce, tomatoes, onions, and cucumbers'
          },
          {
            name: 'Veggie Buffalo Burger',
            desc: 'Beyond beef burger in buffalo sauce, lettuce, tomatoes, onions, cucumbers, and blue cheese sauce'
          }
        ]
      },
      strips: {
        title: 'Chicken Strips',
        items: [
          { qty: '3 pcs', price: '249 Kč' },
          { qty: '5 pcs', price: '359 Kč' },
          { qty: '7 pcs', price: '469 Kč' }
        ]
      },
      sauces: {
        title: 'Sauces',
        buffalo: {
          title: 'Buffalo',
          levels: ['Mild', 'Medium Spicy', 'Bee Sting', 'Spicy', 'Extra Spicy', 'Nuclear']
        },
        other: ['BBQ', 'Cajun Teriyaki']
      },
      extras: {
        title: 'Extras',
        items: [
          { name: 'Jalapeno Poppers', price: '179 Kč' },
          { name: 'Fries', price: '79 Kč' },
          { name: 'Blue Cheese / Ranch / Holešovice Honey Mustard', price: '49 Kč' },
          { name: 'Extra Sauce', price: '49 Kč' },
          { name: 'Bacon / Cheese (2 pcs)', price: '49 Kč' }
        ]
      },
      beer: {
        title: 'Beer & Cider',
        items: [
          { name: 'Pivovar Hangár Seasonal', sizes: '0.5l / 0.3l', price: '74 Kč / 59 Kč' },
          { name: 'Pivovar Hangár Tleskač 9° IPL', sizes: '0.5l / 0.3l', price: '69 Kč / 57 Kč' },
          { name: 'Kozel 11° Ležák', sizes: '0.5l / 0.3l', price: '52 Kč / 40 Kč' },
          { name: 'Cider 0.33l Can', price: '52 Kč' }
        ]
      },
      wine: {
        title: 'Wine / Cocktails',
        items: [
          { name: 'Red Wine 0.15l', price: '79 Kč' },
          { name: 'White Wine 0.15l', price: '79 Kč' },
          { name: 'Wingz Margaritaz', price: '179 Kč' },
          { name: 'Long Island Ice Tea', price: '209 Kč' },
          { name: 'Dark & Stormy', price: '179 Kč' },
          { name: 'Moscow Mule', price: '169 Kč' },
          { name: 'Boiler Maker', price: '139 Kč' },
          { name: 'Mixed Drinks 0.33l', price: '149 Kč' }
        ]
      },
      alcohol: {
        title: 'Alcohol 0.04l',
        items: [
          { name: 'Ballantine\'s Scotch Whisky', price: '99 Kč' },
          { name: 'Koskenkorva Vodka', price: '99 Kč' },
          { name: 'Jägermeister', price: '99 Kč' },
          { name: 'Tequila Silver/Gold', price: '119 Kč' },
          { name: 'Jack Daniels', price: '119 Kč' },
          { name: 'Havana Club 3 Anos Rum', price: '99 Kč' },
          { name: 'Captain Morgan Spiced Rum', price: '99 Kč' },
          { name: 'Beefeater Gin', price: '99 Kč' },
          { name: 'Becherovka', price: '99 Kč' },
          { name: 'Slivovice/Hruškovice', price: '119 Kč' }
        ]
      },
      nonAlc: {
        title: 'Non-alcoholic Drinks',
        items: [
          { name: 'Coke / Zero / Cherry 0.3l', price: '49 Kč' },
          { name: 'Sprite 0.33l', price: '49 Kč' },
          { name: 'Tap Water', price: 'Free' },
          { name: 'Tonic / Soda 0.3l', price: '39 Kč' }
        ]
      },
      happyHour: {
        title: 'Happy Hour',
        subtitle: 'First Friday of the Month',
        time: '5:00 PM until closing',
        items: [
          { name: 'Wings (per piece)', price: '16 Kč' },
          { name: 'Kozel 11°', price: '37 Kč' },
          { name: 'Mixed drinks', price: '109 Kč' }
        ]
      }
    },
    why: {
      title: 'Why Choose Wingz?',
      authentic: {
        title: 'Authentic American Style',
        desc: 'We bring the genuine American wing experience to Prague, using traditional recipes and cooking methods.'
      },
      atmosphere: {
        title: 'Casual Dining Atmosphere',
        desc: 'Relaxed, friendly environment perfect for groups, sports viewing, and casual dining with friends and family.'
      },
      heat: {
        title: 'Heat Level Options',
        desc: 'From mild to extreme - we offer multiple heat levels including our signature "Reaper" challenge for the brave.'
      }
    },
    footer: {
      address: 'ADDRESS',
      contact: 'CONTACT',
      hours: 'HOURS',
      phone: 'Phone:',
      email: 'Email:',
      rights: 'All rights reserved.'
    }
  },
  cs: {
    nav: {
      menu: 'Jídelníček',
      gallery: 'Galerie',
      location: 'Lokace',
      hours: 'Otevírací doba',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Nejlepší křídla v Praze',
      slogan: 'KUŘECÍ KŘIDÉLKA & DALŠÍ VĚCI',
      subtitle: 'Autentická americká křídla servírovaná čerstvá denně v srdci Holešovic',
      cta: 'Zobrazit jídelníček'
    },
    info: {
      location: 'Lokace',
      rating: 'Hodnocení zákazníků',
      hours: 'Otevírací doba',
      locatedIn: 'Nachází se v Hotelu Olga',
      basedOn: 'Na základě',
      reviews: 'recenzí',
      days: 'Čtvrtek - Neděle',
      time: '17:00 - 23:00',
      service: 'Na místě i s sebou'
    },
    menu: {
      title: 'Jídelníček',
      wings: {
        title: 'Kuřecí Křídélka',
        items: [
          { qty: '12 ks', price: '239 Kč' },
          { qty: '18 ks', price: '339 Kč' },
          { qty: '24 ks', price: '429 Kč' },
          { qty: '30 ks', price: '519 Kč' },
          { qty: '36 ks', price: '609 Kč' },
          { qty: '50 ks', price: '799 Kč' }
        ]
      },
      sandwiches: {
        title: 'Sendviče',
        price: '289 Kč',
        items: [
          {
            name: 'Buffalo Chicken Burger',
            desc: 'Smažené kuřecí stripsy v buffalo omáčce, salát, rajčata, cibule, okurky a omáčka z modrého sýra'
          },
          {
            name: 'BBQ Chicken Burger',
            desc: 'Smažené kuřecí stripsy v BBQ omáčce, salát, rajčata, cibule, okurky a americký sýr'
          },
          {
            name: 'Chicken Bacon Ranch',
            desc: 'Smažené kuřecí stripsy v ranch omáčce, slanina, salát, rajčata, cibule a okurky'
          },
          {
            name: 'Veggie Buffalo Burger',
            desc: 'Beyond beef burger v buffalo omáčce, salát, rajčata, cibule, okurky a omáčka z modrého sýra'
          }
        ]
      },
      strips: {
        title: 'Kuřecí Stripsy',
        items: [
          { qty: '3 ks', price: '249 Kč' },
          { qty: '5 ks', price: '359 Kč' },
          { qty: '7 ks', price: '469 Kč' }
        ]
      },
      sauces: {
        title: 'Omáčky',
        buffalo: {
          title: 'Buffalo',
          levels: ['Jemná', 'Středně pálivá', 'Bee Sting', 'Pálivá', 'Extra Pálivá', 'Nuclear']
        },
        other: ['BBQ', 'Cajun Teriyaki']
      },
      extras: {
        title: 'Extraz',
        items: [
          { name: 'Jalapeno Poppers', price: '179 Kč' },
          { name: 'Hranolky', price: '79 Kč' },
          { name: 'Modrého Sýru / Ranch / Holešovice Med Hořčice', price: '49 Kč' },
          { name: 'Extra Omáčka', price: '49 Kč' },
          { name: 'Slanina / Sýr (2 ks)', price: '49 Kč' }
        ]
      },
      beer: {
        title: 'Pivo & Cider',
        items: [
          { name: 'Pivovar Hangár Seasonal', sizes: '0.5l / 0.3l', price: '74 Kč / 59 Kč' },
          { name: 'Pivovar Hangár Tleskač 9° IPL', sizes: '0.5l / 0.3l', price: '69 Kč / 57 Kč' },
          { name: 'Kozel 11° Ležák', sizes: '0.5l / 0.3l', price: '52 Kč / 40 Kč' },
          { name: 'Cider 0,33l Plechovka', price: '52 Kč' }
        ]
      },
      wine: {
        title: 'Víno / Koktejly',
        items: [
          { name: 'Červené Víno 0,15l', price: '79 Kč' },
          { name: 'Bílé Víno 0,15l', price: '79 Kč' },
          { name: 'Wingz Margaritaz', price: '179 Kč' },
          { name: 'Long Island Ice Tea', price: '209 Kč' },
          { name: 'Dark & Stormy', price: '179 Kč' },
          { name: 'Moscow Mule', price: '169 Kč' },
          { name: 'Boiler Maker', price: '139 Kč' },
          { name: 'Míchané Nápoje 0,33l', price: '149 Kč' }
        ]
      },
      alcohol: {
        title: 'Alkohol 0,04l',
        items: [
          { name: 'Ballantine\'s Scotch Whisky', price: '99 Kč' },
          { name: 'Koskenkorva Vodka', price: '99 Kč' },
          { name: 'Jägermeister', price: '99 Kč' },
          { name: 'Tequila Silver/Gold', price: '119 Kč' },
          { name: 'Jack Daniels', price: '119 Kč' },
          { name: 'Havana Club 3 Anos Rum', price: '99 Kč' },
          { name: 'Captain Morgan Spiced Rum', price: '99 Kč' },
          { name: 'Beefeater Gin', price: '99 Kč' },
          { name: 'Becherovka', price: '99 Kč' },
          { name: 'Slivovice/Hruškovice', price: '119 Kč' }
        ]
      },
      nonAlc: {
        title: 'Nealkoholické Nápoje',
        items: [
          { name: 'Coke / Zero / Cherry 0,3l', price: '49 Kč' },
          { name: 'Sprite 0,33l', price: '49 Kč' },
          { name: 'Kohoutková voda', price: 'Zdarma' },
          { name: 'Tonic / Sodovka 0,3l', price: '39 Kč' }
        ]
      },
      happyHour: {
        title: 'Happy Hour',
        subtitle: 'První pátek v měsíci',
        time: '17:00 do zavření',
        items: [
          { name: 'Křidla (kus)', price: '16 Kč' },
          { name: 'Kozel 11°', price: '37 Kč' },
          { name: 'Míchané nápoje', price: '109 Kč' }
        ]
      }
    },
    why: {
      title: 'Proč si vybrat Wingz?',
      authentic: {
        title: 'Autentický americký styl',
        desc: 'Přinášíme skutečný americký zážitek z křídel do Prahy, používající tradiční recepty a způsoby vaření.'
      },
      atmosphere: {
        title: 'Příjemná atmosféra',
        desc: 'Uvolněné, přátelské prostředí ideální pro skupiny, sledování sportů a neformální stolování s přáteli a rodinou.'
      },
      heat: {
        title: 'Možnosti pálivosti',
        desc: 'Od mírné po extrémní - nabízíme více úrovní pálivosti včetně naší originální výzvy "Reaper" pro odvážné.'
      }
    },
    footer: {
      address: 'ADRESA',
      contact: 'KONTAKT',
      hours: 'OTEVÍRACÍ DOBA',
      phone: 'Telefon:',
      email: 'Email:',
      rights: 'Všechna práva vyhrazena.'
    }
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const t = translations[language];

  // Detect screen size for responsive carousel
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 480) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      // Reset to first page when screen size changes
      setCurrentTestimonialIndex(0);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cs' : 'en');
  };

  const galleryImages = [
    '/photos/02_Wingzcz_DSCF6551.png',
    '/photos/08_Wingzcz_DSCF6580.png',
    '/photos/11_Wingzcz_DSCF6628.png',
    '/photos/14_Wingzcz_DSCF6641.png',
    '/photos/23_Wingzcz_DSCF6686.png',
    '/photos/2022-02-18.jpg'
  ];

  // Testimonials data - ADD YOUR TESTIMONIALS HERE
  // Reviewer photos go in: /public/photos/reviewers/
  // Review photos go in: /public/photos/reviews/
  const testimonials = [
    {
      name: 'Darlene Chisholm',
      rating: 5,
      review: "If you're from the US, Canada, or just really enjoy American food, stop by Wingz when in Prague! Tastes like home but better!! Fresh made wings and burgers, tasty spiced fries! The batter on the chicken is perfect.",
      reviewerPhoto: '/photos/reviewers/darlene-chisholm.jpg', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: '/photos/reviews/darlene-review.jpg', // Photo attached by reviewer - add to /public/photos/reviews/
      date: 'a year ago',
      isLocalGuide: true
    },
    {
      name: 'Jan Doucha',
      rating: 5,
      review: 'Excellent food and atmosphere. Verified by multiple visits. 👍',
      reviewerPhoto: '/photos/reviewers/jan-doucha.png', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: '/photos/reviews/jan-doucha-review.jpg', // No photo attached
      date: '6 months ago',
      isLocalGuide: true,
      reviewsCount: 22,
      photosCount: 632
    },
    {
      name: 'Nikolas Zábelka',
      rating: 5,
      review: "Sir! Truly the best wings I have ever tasted. Great and kind service, sufficient offer and indescribable flavors. Thank you! ❤️",
      reviewerPhoto: '/photos/reviewers/nikolas-zabelka.png', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: 'photos/reviews/nicolas-zabelka-review.jpg', // No photo attached
      date: '7 months ago',
      isLocalGuide: true,
      reviewsCount: 24,
      photosCount: 29
    },
    {
      name: 'Anastasia Surnik',
      rating: 5,
      review: "This is a very atmospheric place in Prague! Even though it's American, both the American community and locals love this spot. The food is delicious, the staff is friendly, and they often show live sports matches. Highly recommend!",
      reviewerPhoto: '/photos/reviewers/anastasia-surnik.png', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: 'photos/reviews/anastasia-surnik-review.jpg', // No photo attached
      date: '8 months ago',
      isLocalGuide: false,
      reviewsCount: 6,
      photosCount: 6
    },
    {
      name: 'Marek Dvořáček',
      rating: 5,
      review: "Great American wings, I recommend the nuclear version for connoisseurs.",
      reviewerPhoto: '/photos/reviewers/marek-dvoracek.png', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: '/photos/reviewers/marek-dvoracek.png', // No photo attached
      date: '5 months ago',
      isLocalGuide: true,
      reviewsCount: 51,
      photosCount: 138
    },
    {
      name: 'Kristýna Kahlich',
      rating: 5,
      review: "The best wings in Prague! So tasty! I loved the Cajun teriyaki sauce! Service was amazing as well! Such a nice atmosphere- felt like we were in America!",
      reviewerPhoto: '/photos/reviewers/kristyna-kahlich.png', // Add reviewer photo to /public/photos/reviewers/
      reviewPhoto: '/photos/reviews/kristyna-kahlich-review.jpg', // No photo attached
      date: 'a year ago',
      isLocalGuide: true,
      reviewsCount: 22,
      photosCount: 106
    },
    // Add more testimonials here following the same structure
  ];

  // Memoize testimonials length to prevent unnecessary re-renders
  const testimonialsLength = useMemo(() => testimonials.length, [testimonials.length]);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;

    const totalPages = Math.ceil(testimonialsLength / cardsPerView);
    if (totalPages <= 1) return; // Only one page, don't set up interval

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => {
        const maxIndex = totalPages - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, cardsPerView, testimonialsLength]);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container navbar">
          <div className="logo-container">
            <img src="/logo.png" alt="Wingz Logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a href="#menu">{t.nav.menu}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#location">{t.nav.location}</a>
            <a href="#hours">{t.nav.hours}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button className="language-switcher" onClick={toggleLanguage}>
              {language === 'en' ? 'CZ' : 'EN'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <div className="hero-slogan">
            <span className="slogan-text">{language === 'cs' ? 'KUŘECÍ KŘIDÉLKA' : 'CHICKEN WINGS'}</span>
            <span className="slogan-ampersand">&</span>
            <span className="slogan-text">{language === 'cs' ? 'DALŠÍ VĚCI' : 'OTHER THINGS'}</span>
          </div>
          <p>{t.hero.subtitle}</p>
          <a href="#menu" className="cta-button">{t.hero.cta}</a>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-bar" id="location">
        <div className="container info-grid">
          <div className="info-item">
            <span className="info-icon">LOC</span>
            <h3>{t.info.location}</h3>
            <p><strong>Janovského 44</strong></p>
            <p>170 00 Praha 7-Holešovice</p>
            <p className="subtext">{t.info.locatedIn}</p>
          </div>
          <div className="info-item">
            <span className="info-icon">4.8</span>
            <h3>{t.info.rating}</h3>
            <p><strong>4.8 / 5.0 {language === 'cs' ? 'Hvězdiček' : 'Stars'}</strong></p>
            <p className="subtext">{t.info.basedOn} 592 {t.info.reviews}</p>
          </div>
          <div className="info-item">
            <span className="info-icon">HRS</span>
            <h3>{t.info.hours}</h3>
            <p><strong>{t.info.days}</strong></p>
            <p className="subtext">{t.info.time}</p>
            <p className="subtext">{t.info.service}</p>
          </div>
        </div>
      </section>

      <div className="checkered-pattern"></div>

      {/* Photo Gallery */}
      <section className="photo-gallery container" id="gallery">
        <h2 className="section-title">{language === 'cs' ? 'Galerie' : 'Gallery'}</h2>
        <p className="section-subtitle">{language === 'cs' ? 'Podívejte se na naše chutné pokrmy' : 'Take a look at our delicious dishes'}</p>
        <div className="gallery-grid">
          {galleryImages.map((imageSrc, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              onClick={() => openLightbox(imageSrc)}
            >
              <img src={imageSrc} alt={`Wingz Restaurant ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Wingz Restaurant" />
          </div>
        </div>
      )}

      <div className="checkered-pattern"></div>

      {/* Full Menu Section */}
      <section className="menu-section" id="menu">
        <div className="container">
          <h2 className="section-title">{t.menu.title}</h2>
        
        {/* Chicken Wings */}
        <MenuSection title={t.menu.wings.title}>
          <div className="menu-items-grid">
            {t.menu.wings.items.map((item, idx) => (
              <MenuItem key={idx} name={item.qty} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Sandwiches */}
        <MenuSection title={t.menu.sandwiches.title}>
          <div className="menu-items-list">
            {t.menu.sandwiches.items.map((item, idx) => (
              <MenuItem 
                key={idx} 
                name={item.name} 
                price={t.menu.sandwiches.price}
                desc={item.desc}
              />
            ))}
          </div>
        </MenuSection>

        {/* Chicken Strips */}
        <MenuSection title={t.menu.strips.title}>
          <div className="menu-items-grid">
            {t.menu.strips.items.map((item, idx) => (
              <MenuItem key={idx} name={item.qty} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Sauces */}
        <MenuSection title={t.menu.sauces.title}>
          <div className="sauces-section">
            <div className="sauce-item">
              <strong>{t.menu.sauces.buffalo.title}:</strong>
              <span>{t.menu.sauces.buffalo.levels.join(', ')}</span>
            </div>
            {t.menu.sauces.other.map((sauce, idx) => (
              <div key={idx} className="sauce-item">
                <strong>{sauce}</strong>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Extras */}
        <MenuSection title={t.menu.extras.title}>
          <div className="menu-items-list">
            {t.menu.extras.items.map((item, idx) => (
              <MenuItem key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Beer & Cider */}
        <MenuSection title={t.menu.beer.title}>
          <div className="menu-items-list">
            {t.menu.beer.items.map((item, idx) => (
              <MenuItem 
                key={idx} 
                name={item.name} 
                price={item.price}
                sizes={item.sizes}
              />
            ))}
          </div>
        </MenuSection>

        {/* Wine / Cocktails */}
        <MenuSection title={t.menu.wine.title}>
          <div className="menu-items-list">
            {t.menu.wine.items.map((item, idx) => (
              <MenuItem key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Alcohol */}
        <MenuSection title={t.menu.alcohol.title}>
          <div className="menu-items-list">
            {t.menu.alcohol.items.map((item, idx) => (
              <MenuItem key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Non-alcoholic */}
        <MenuSection title={t.menu.nonAlc.title}>
          <div className="menu-items-list">
            {t.menu.nonAlc.items.map((item, idx) => (
              <MenuItem key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </MenuSection>

        {/* Happy Hour */}
        <MenuSection title={t.menu.happyHour.title} highlight>
          <div className="happy-hour-info">
            <p className="happy-hour-subtitle">{t.menu.happyHour.subtitle}</p>
            <p className="happy-hour-time">{t.menu.happyHour.time}</p>
          </div>
          <div className="menu-items-list">
            {t.menu.happyHour.items.map((item, idx) => (
              <MenuItem key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </MenuSection>
        </div>
      </section>


      {/* Features / Why Wingz */}
      <section className="info-bar info-bar-alt" id="hours">
        <div className="container">
          <h2 className="section-title" style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)'}}>{t.why.title}</h2>
          <div className="info-grid">
             <div className="info-item">
               <span className="info-icon">USA</span>
               <h3>{t.why.authentic.title}</h3>
               <p>{t.why.authentic.desc}</p>
             </div>
             <div className="info-item">
               <span className="info-icon">VIBE</span>
               <h3>{t.why.atmosphere.title}</h3>
               <p>{t.why.atmosphere.desc}</p>
             </div>
             <div className="info-item">
               <span className="info-icon">HEAT</span>
               <h3>{t.why.heat.title}</h3>
               <p>{t.why.heat.desc}</p>
             </div>
          </div>
        </div>
      </section>

      <div className="checkered-pattern"></div>

      {/* Testimonials Section */}
      <section className="testimonials-section container" id="reviews">
        <h2 className="section-title">{language === 'cs' ? 'Recenze' : 'Customer Reviews'}</h2>
        <p className="section-subtitle">{language === 'cs' ? 'Co říkají naši zákazníci' : 'What our customers say'}</p>
        <div 
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={() => setCurrentTestimonialIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentTestimonialIndex === 0}
            aria-label="Previous testimonials"
          >
            ‹
          </button>
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentTestimonialIndex * (100 / cardsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="carousel-slide">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    onPhotoClick={openLightbox}
                  />
                </div>
              ))}
            </div>
          </div>
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={() => {
              const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;
              setCurrentTestimonialIndex((prev) => Math.min(maxIndex, prev + 1));
            }}
            disabled={currentTestimonialIndex >= Math.ceil(testimonials.length / cardsPerView) - 1}
            aria-label="Next testimonials"
          >
            ›
          </button>
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(testimonials.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="checkered-pattern"></div>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <h3><span>WINGZ</span> <span>PRAGUE</span></h3>
          <div className="footer-info">
            <div className="footer-section">
              <h4>{t.footer.address}</h4>
              <p>Janovského 44</p>
              <p>170 00 Praha 7-Holešovice</p>
              <p>{t.info.locatedIn}</p>
            </div>
            <div className="footer-section">
              <h4>{t.footer.contact}</h4>
              <p>{t.footer.phone} +420 123 456 789</p>
              <p>{t.footer.email} info@wingzprague.cz</p>
            </div>
            <div className="footer-section">
              <h4>{t.footer.hours}</h4>
              <p>{t.info.days}</p>
              <p>{t.info.time}</p>
              <p>{t.info.service}</p>
            </div>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Wingz Restaurant. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function MenuSection({ title, children, highlight }) {
  return (
    <div className={`menu-category ${highlight ? 'highlight' : ''}`}>
      <h3 className="menu-category-title">{title}</h3>
      {children}
    </div>
  );
}

function MenuItem({ name, price, desc, sizes }) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <span className="menu-item-name">{name}</span>
        <span className="menu-item-price">{price}</span>
      </div>
      {sizes && <div className="menu-item-sizes">{sizes}</div>}
      {desc && <div className="menu-item-desc">{desc}</div>}
    </div>
  );
}

function TestimonialCard({ testimonial, onPhotoClick }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-reviewer">
          <img 
            src={testimonial.reviewerPhoto || '/photos/reviewers/default-avatar.png'} 
            alt={testimonial.name}
            className="reviewer-avatar"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Ccircle cx="20" cy="20" r="20" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="20"%3E' + testimonial.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="reviewer-info">
            <div className="reviewer-name">
              {testimonial.name}
            </div>
            <div className="review-rating">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-content">
        <p className="review-text">{testimonial.review}</p>
        {testimonial.reviewPhoto && (
          <div className="review-photo" onClick={() => onPhotoClick && onPhotoClick(testimonial.reviewPhoto)}>
            <img 
              src={testimonial.reviewPhoto} 
              alt="Review photo" 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
