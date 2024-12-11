import React from 'react';
import styled from 'styled-components';

const PackageDetails = ({ title, description, price }) => {
  return (
    <Wrapper>
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <CTA>Customize</CTA>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f8f8, #e1e1e1);
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: fadeIn 1s ease-out;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #faf3e3, #f1e0a1); /* Soft gradient background */
  border: 1px solid #d4af37;
  border-radius: 15px; /* Rounded corners for a luxurious feel */
  padding: 2.5rem 2rem;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  width: 80%; /* Add width for a more cohesive layout */
  max-width: 600px; /* Prevent it from stretching too far */
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px); /* Slight lift on hover */
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    filter: brightness(1.1); /* Slight brightness increase */
  }
`;

const Title = styled.h3`
  font-family: 'Merriweather', serif;
  color: #0b486b;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: fadeIn 1s ease-out;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.15rem;
  margin-bottom: 1.8rem;
  line-height: 1.7;
  font-weight: 400;
`;

const Price = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #d4af37;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.2rem 0;
`;

const CTA = styled.button`
  background: #f5623b;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  border-radius: 50px; /* Fully rounded for a sleek, modern look */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #d4af37;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: #f5623b;
    transform: translateY(3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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

export default PackageDetails;
