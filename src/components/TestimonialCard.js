import React from 'react';
import styled from 'styled-components';

const TestimonialCard = ({ name, feedback, location, image }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <Feedback>"{feedback}"</Feedback>
      <Name>- {name}</Name>
      <Location>{location}</Location>
    </Card>
  );
};

const Card = styled.div`
  width: 320px;
  border: 1px solid #d4af37;
  border-radius: 15px; /* More rounded corners */
  padding: 2rem;
  background: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  /* Hover effects */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    background-color: #f8f8f8; /* Light background on hover */
  }
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #d4af37; /* Thicker border around image */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Soft shadow around image */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect on image */
  &:hover {
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Feedback = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
  border-left: 4px solid #f5623b; /* Accent line */
  padding-left: 1rem;
  position: relative;
  z-index: 1;

  /* Adding a light shadow for text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h4`
  font-family: 'Merriweather', serif;
  color: #0b486b;
  margin-top: 1rem;
  font-size: 1.3rem; /* Larger font for name */
  font-weight: 700;
  text-transform: uppercase;
`;

const Location = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #777;
  font-size: 1rem;
  margin-top: 0.5rem;
  letter-spacing: 0.5px; /* Slight letter-spacing for readability */
`;

export default TestimonialCard;
