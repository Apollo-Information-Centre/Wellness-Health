import React from 'react';
import styled from 'styled-components';
import PackageCard from '../components/PackageCard';

const Packages = () => {
  const packagesData = [
    {
      title: 'Health Check-Up & Pleasure',
      description:
        'Experience top-notch medical evaluations combined with serene relaxation in luxurious environments.',
      price: '$299',
      image: '/assets/images/health-checkup.jpg',
    },
    {
      title: 'Pure Wellness Program',
      description:
        'Rejuvenate with a tailored wellness retreat focusing on balance, mindfulness, and harmony.',
      price: '$399',
      image: '/assets/images/pure-wellness.jpg',
    },
    {
      title: 'Luxury Wellness',
      description:
        'Indulge in exclusive, premium wellness programs in opulent settings for a truly unmatched experience.',
      price: '$599',
      image: '/assets/images/luxury-wellness.jpg',
    },
  ];

  return (
    <Wrapper>
      <Title>Our Packages</Title>
      <PackagesGrid>
        {packagesData.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            image={pkg.image}
          />
        ))}
      </PackagesGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f8f8f8, #e1e1e1);
  min-height: 100vh;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: #0b486b;
  font-family: 'Merriweather', serif;
  margin-bottom: 4rem;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: fadeIn 1.5s ease-out;
  animation-delay: 0.3s; /* Slight delay for smooth entrance */
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
  transition: grid-template-columns 0.3s ease;
  animation: fadeInGrid 2s ease-out;
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

const fadeInGrid = `
  @keyframes fadeInGrid {
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

export default Packages;
