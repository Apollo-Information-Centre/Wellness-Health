import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PackageDetails from './components/PackageDetails';
import WellnessCenterMap from './components/WellnessCenterMap';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard'; // Import TestimonialCard

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HeroSection />} />

        {/* Packages page */}
        <Route path="/packages" element={<PackagePage />} />

        {/* Wellness Centers page */}
        <Route path="/wellness-centers" element={<WellnessCenterMap />} />

        {/* About Us page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Contact Us page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />

        {/* Testimonials page */}
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const PackagePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Merriweather, serif', color: '#0b486b' }}>
        Our Packages
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Package Cards */}
        <PackageDetails
          title="Health Check-Up & Pleasure"
          description="Experience top-notch medical evaluations combined with serene relaxation."
          price="$299"
        />
        <PackageDetails
          title="Pure Wellness Program"
          description="Rejuvenate with a tailored wellness retreat focusing on balance and mindfulness."
          price="$399"
        />
        <PackageDetails
          title="Luxury Wellness"
          description="Indulge in premium health and relaxation programs in opulent settings."
          price="$599"
        />
      </div>

      {/* Testimonial Section */}
      <h2 style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'Merriweather, serif', color: '#0b486b' }}>
        What Our Clients Say
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Testimonial Cards */}
        <TestimonialCard
          name="John Doe"
          feedback="The luxury wellness package was a life-changing experience. The staff was attentive, and the environment was so serene."
          location="Dubai, UAE"
          image="/assets/images/john-doe.jpg"
        />
        <TestimonialCard
          name="Jane Smith"
          feedback="Combining a health check-up with a relaxing stay was the best decision. I felt healthier and rejuvenated."
          location="Bangkok, Thailand"
          image="/assets/images/jane-smith.jpg"
        />
        <TestimonialCard
          name="Michael Lee"
          feedback="The pure wellness program helped me achieve a new level of mindfulness and balance. Highly recommend!"
          location="Istanbul, Turkey"
          image="/assets/images/michael-lee.jpg"
        />
      </div>
    </div>
  );
};

export default App;
