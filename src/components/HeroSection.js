import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set autoplay interval
    fade: true, // Smooth fade transition
  };

  return (
    <Wrapper>
      <Hero>
        <Slider {...settings}>
          <Slide>
            <Image src="/assets/images/health-wellness.jpg" alt="Health Wellness" />
            <Overlay>
              <Tagline>Experience the Essence of Luxury Wellness</Tagline>
              <CTA href="#packages">Explore Our Wellness Packages</CTA>
            </Overlay>
          </Slide>
          <Slide>
            <Image src="/assets/images/luxury-setting.jpg" alt="Luxury Setting" />
            <Overlay>
              <Tagline>Indulge in Pure Wellness</Tagline>
              <CTA href="#contact">Book Your Experience Now</CTA>
            </Overlay>
          </Slide>
        </Slider>
      </Hero>

      {/* Floating WhatsApp Icon */}
      <WhatsAppButton href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon src="/assets/images/whatsapp-icon.png" alt="WhatsApp" />
      </WhatsAppButton>

      {/* Additional Content Below Hero */}
      <ContentSection>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <Text>
          At Wellness Retreat, we focus on providing personalized care that balances physical health, emotional well-being, and mental peace. Our state-of-the-art centers in India, Dubai, and Turkey are designed to offer you the best wellness experience.
        </Text>
        <CTA href="#packages">Discover Our Programs</CTA>
      </ContentSection>

      <FeaturesSection>
        <Feature>
          <FeatureIcon src="/assets/icons/health-icon.png" alt="Health Checkups" />
          <FeatureTitle>Comprehensive Health Checkups</FeatureTitle>
          <FeatureText>Get a complete health evaluation with personalized recommendations tailored to your well-being.</FeatureText>
          <FeatureButton href="#health-checkup">Learn More</FeatureButton>
        </Feature>
        <Feature>
          <FeatureIcon src="/assets/icons/wellness-icon.png" alt="Wellness Programs" />
          <FeatureTitle>Tailored Wellness Programs</FeatureTitle>
          <FeatureText>Enjoy wellness programs designed to align with your unique health and fitness goals.</FeatureText>
          <FeatureButton href="#wellness-programs">Explore Our Programs</FeatureButton>
        </Feature>
        <Feature>
          <FeatureIcon src="/assets/icons/luxury-icon.png" alt="Luxury Experience" />
          <FeatureTitle>Luxury Experience</FeatureTitle>
          <FeatureText>Relax and rejuvenate in luxurious, serene environments that focus on your total well-being.</FeatureText>
          <FeatureButton href="#luxury-experience">Indulge in Luxury</FeatureButton>
        </Feature>
      </FeaturesSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

const Slide = styled.div`
  position: relative;
  height: 100vh; /* Full viewport height for each slide */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.5s ease;
  @media (max-width: 768px) {
    height: auto;
  }
  &:hover {
    transform: scale(1.1); /* Subtle zoom effect on hover */
    opacity: 0.85;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Darker overlay for contrast */
  color: white;
  text-align: center;
  padding: 0 20px;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Tagline = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: fadeIn 2s ease-out;
`;

const CTA = styled.a`
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background-color: #d4af37;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #f5623b;
    transform: scale(1.05);
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: scale(0.98);
  }
  animation: fadeIn 2s ease-out 1s;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const ContentSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #0b486b;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 3rem 2rem;
  background-color: #faf3e3;
  text-align: center;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 300px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Enlarging effect on hover */
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0b486b;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const FeatureButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: #d4af37;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #f5623b;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default HeroSection;
