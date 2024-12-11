import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo>WellnessHub</Logo>
        <LinksContainer>
          <LinksColumn>
            <LinkTitle>Quick Links</LinkTitle>
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/about-us">About Us</LinkItem>
            <LinkItem href="/services">Services</LinkItem>
            <LinkItem href="/pricing">Pricing</LinkItem>
          </LinksColumn>
          <LinksColumn>
            <LinkTitle>Legal</LinkTitle>
            <LinkItem href="/privacy-policy">Privacy Policy</LinkItem>
            <LinkItem href="/terms-of-service">Terms of Service</LinkItem>
          </LinksColumn>
          <LinksColumn>
            <LinkTitle>Get In Touch</LinkTitle>
            <LinkItem href="/contact-us">Contact Us</LinkItem>
            <LinkItem href="/faq">FAQ</LinkItem>
            <LinkItem href="/support">Support</LinkItem>
          </LinksColumn>
        </LinksContainer>
        <SocialMediaContainer>
          <SocialIcon href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <img src="/assets/icons/facebook-icon.png" alt="Facebook" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <img src="/assets/icons/instagram-icon.png" alt="Instagram" />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <img src="/assets/icons/twitter-icon.png" alt="Twitter" />
          </SocialIcon>
        </SocialMediaContainer>
        <Divider />
        <FooterBottom>
          <p>&copy; 2024 WellnessHub. All Rights Reserved.</p>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: linear-gradient(45deg, #0b486b, #2b8c93); /* Elegant gradient for depth */
  color: white;
  padding: 5rem 2rem; /* Spacious padding */
  width: 100%;
  position: relative;
  bottom: 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for hover effects */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Logo = styled.h1`
  font-family: 'Merriweather', serif;
  color: #fff;
  margin: 0;
  font-size: 2.5rem; /* Large font size for the logo */
  letter-spacing: 2px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05); /* Slight scaling effect on hover */
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const LinkTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

const LinkItem = styled.a`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #f5623b; /* Highlight color on hover */
    transform: translateX(5px); /* Smooth slide effect */
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  img {
    width: 25px;
    height: 25px;
  }
  &:hover {
    background-color: #f5623b;
    transform: scale(1.1); /* Hover scale effect */
  }
`;

const Divider = styled.div`
  margin: 3rem 0;
  border-bottom: 1px solid #fff;
  width: 100%;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
  p {
    font-size: 1rem;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

export default Footer;
