import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Content>
        <Section>
          <SectionTitle>Our Brand Story</SectionTitle>
          <SectionContent>
            <p>
              At Wellness Retreat, we are redefining the concept of wellness by blending expert medical care with serene
              luxury. Our journey began with a vision to create a sanctuary where individuals could experience **optimal
              health** and **rejuvenation**. With our state-of-the-art centers in premier locations like **India**, **Dubai**,
              and **Turkey**, we are setting new standards in the wellness industry.
            </p>
            <p>
              We believe that wellness is more than just physical health – it’s a holistic experience that nurtures the mind,
              body, and spirit. We’re here to provide that balance, whether it’s through personalized wellness programs or
              comprehensive health check-ups.
            </p>
          </SectionContent>
          <Image src="/assets/images/wellness-story.jpg" alt="Our Story" />
        </Section>

        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            <p>
              Our mission is to offer an unparalleled wellness experience by combining the latest in medical expertise with
              **tranquil environments**. We’re committed to providing services that not only restore physical health but
              also bring mental clarity and emotional balance. We understand the challenges of modern life and offer
              programs that cater to the individual needs of each guest.
            </p>
            <p>
              Through innovation, care, and dedication, we strive to make every guest feel empowered, rejuvenated, and
              ready to face the world with renewed energy and health.
            </p>
          </SectionContent>
          <Image src="/assets/images/wellness-mission.jpg" alt="Our Mission" />
        </Section>

        <Section>
          <SectionTitle>Our Expertise</SectionTitle>
          <SectionContent>
            <p>
              Wellness Retreat is proud to combine **cutting-edge medical expertise** with a deep understanding of
              **wellness practices**. Our team of medical professionals works alongside wellness experts to create programs
              that address every aspect of an individual’s health – from physical to mental and emotional well-being.
            </p>
            <p>
              Whether you're seeking a health check-up or a transformative wellness experience, our dual expertise ensures
              that you receive the highest level of care and attention, personalized to your needs.
            </p>
          </SectionContent>
          <Image src="/assets/images/wellness-expertise.jpg" alt="Our Expertise" />
        </Section>

        <CTAWrapper>
          <CTA href="/contact-us">Join Us Today</CTA>
        </CTAWrapper>
      </Content>

      {/* Floating WhatsApp Icon */}
      <WhatsAppButton
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon src="/assets/images/whatsapp-icon.png" alt="WhatsApp" />
      </WhatsAppButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #faf3e3, #f1e0a1);
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  text-align: center;
  color: #0b486b;
  font-family: 'Merriweather', serif;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 2px;
  animation: fadeIn 1.5s ease-out;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.7;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-family: 'Merriweather', serif;
  color: #0b486b;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 90%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTA = styled.a`
  padding: 1.2rem 3rem;
  background-color: #f5623b;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #d4af37;
    transform: translateY(-3px);
  }
  &:active {
    background-color: #f5623b;
    transform: translateY(3px);
  }
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

export default AboutUs;
