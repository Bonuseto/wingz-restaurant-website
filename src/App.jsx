import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container navbar">
          <div className="logo">WINGZ</div>
          <nav className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#location">Location</a>
            <a href="#hours">Hours</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Best Wings in Prague</h1>
          <p>Authentic American-style wings served fresh daily in the heart of Holešovice</p>
          <a href="#menu" className="cta-button">View Menu</a>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-bar" id="location">
        <div className="container info-grid">
          <div className="info-item">
            <span className="info-icon">LOC</span>
            <h3>Location</h3>
            <p><strong>Janovského 44</strong></p>
            <p>170 00 Praha 7-Holešovice</p>
            <p className="subtext">Located in Hotel Olga</p>
          </div>
          <div className="info-item">
            <span className="info-icon">4.8</span>
            <h3>Customer Rating</h3>
            <p><strong>4.8 / 5.0 Stars</strong></p>
            <p className="subtext">Based on 592 reviews</p>
          </div>
          <div className="info-item">
            <span className="info-icon">HRS</span>
            <h3>Opening Hours</h3>
            <p><strong>Thursday - Sunday</strong></p>
            <p className="subtext">5:00 PM - 11:00 PM</p>
          </div>
        </div>
      </section>

      <div className="checkered-pattern"></div>

      {/* Menu Highlights */}
      <section className="menu-section container" id="menu">
        <h2 className="section-title">Menu Highlights</h2>
        <p className="section-subtitle">Our most popular dishes, crafted with quality ingredients</p>
        <div className="menu-grid">
          <MenuCard 
            title="Classic Buffalo Wings" 
            price="215 Kč" 
            desc="Our signature wings tossed in authentic buffalo sauce. Served with fresh carrots, celery sticks, and house-made blue cheese dip."
            imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          />
          <MenuCard 
            title="Honey BBQ Wings" 
            price="215 Kč" 
            desc="Sweet and smoky BBQ glaze with a hint of honey. Perfect for those who prefer flavor without the heat."
            imgUrl="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
          />
          <MenuCard 
            title="Crispy Fries" 
            price="85 Kč" 
            desc="Hand-cut golden fries, perfectly seasoned and fried to crispy perfection. The ideal companion to any wing order."
            imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
          />
          <MenuCard 
            title="Nachos Supreme" 
            price="195 Kč" 
            desc="Layered tortilla chips with melted cheese, fresh jalapeños, diced tomatoes, and our signature salsa. Served with sour cream and guacamole."
            imgUrl="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=80"
          />
          <MenuCard 
            title="Craft Beer Selection" 
            price="65 Kč" 
            desc="Local Czech draft beers and imported craft selections. The perfect pairing to complement your wings."
            imgUrl="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=900&q=80"
          />
          <MenuCard 
            title="Onion Rings" 
            price="95 Kč" 
            desc="Beer-battered onion rings, crispy on the outside and tender inside. Served with our house-made dipping sauce."
            imgUrl="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </section>

      {/* Features / Why Wingz */}
      <section className="info-bar" style={{backgroundColor: '#f4f4f4'}} id="hours">
        <div className="container">
          <h2 className="section-title" style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)'}}>Why Choose Wingz?</h2>
          <div className="info-grid">
             <div className="info-item">
               <span className="info-icon">USA</span>
               <h3>Authentic American Style</h3>
               <p>We bring the genuine American wing experience to Prague, using traditional recipes and cooking methods.</p>
             </div>
             <div className="info-item">
               <span className="info-icon">VIBE</span>
               <h3>Casual Dining Atmosphere</h3>
               <p>Relaxed, friendly environment perfect for groups, sports viewing, and casual dining with friends and family.</p>
             </div>
             <div className="info-item">
               <span className="info-icon">HEAT</span>
               <h3>Heat Level Options</h3>
               <p>From mild to extreme - we offer multiple heat levels including our signature "Reaper" challenge for the brave.</p>
             </div>
          </div>
        </div>
      </section>

      <div className="checkered-pattern"></div>

      {/* Footer */}
      <footer id="contact">
        <div className="container footer-content">
          <h3>WINGZ PRAGUE</h3>
          <div className="footer-info">
            <div className="footer-section">
              <h4>Address</h4>
              <p>Janovského 44</p>
              <p>170 00 Praha 7-Holešovice</p>
              <p>Located in Hotel Olga</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Phone: +420 123 456 789</p>
              <p>Email: info@wingzprague.cz</p>
            </div>
            <div className="footer-section">
              <h4>Hours</h4>
              <p>Thursday - Sunday</p>
              <p>5:00 PM - 11:00 PM</p>
              <p>Dine-in & Takeaway</p>
            </div>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Wingz Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function MenuCard({ title, price, desc, imgUrl }) {
  return (
    <div className="menu-card">
      <div className="card-image" style={{backgroundImage: `url(${imgUrl})`}}></div>
      <div className="card-content">
        <div className="card-title">
          <span>{title}</span>
          <span className="price">{price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default App;
