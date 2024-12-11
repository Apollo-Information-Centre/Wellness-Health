import React from 'react';
import styled from 'styled-components';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      feedback:
        'The luxury wellness package was a life-changing experience. The staff was attentive, and the environment was so serene.',
      location: 'Dubai, UAE',
      image: '/assets/images/john-doe.jpg', // Correct path for public folder
    },
    {
      name: 'Jane Smith',
      feedback:
        'Combining a health check-up with a relaxing stay was the best decision. I felt healthier and rejuvenated.',
      location: 'Bangkok, Thailand',
      image: '/assets/images/jane-smith.jpg', // Correct path for public folder
    },
    {
      name: 'Michael Lee',
      feedback:
        'The pure wellness program helped me achieve a new level of mindfulness and balance. Highly recommend!',
      location: 'Istanbul, Turkey',
      image: '/assets/images/michael-lee.jpg', // Correct path for public folder
    },
  ];

  return (
    <Wrapper>
      <Title>What Our Clients Say</Title>
      <TestimonialsGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            location={testimonial.location}
            image={testimonial.image} // Image passed correctly
          />
        ))}
      </TestimonialsGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 2rem; /* Increased padding for spacious feel */
  background: linear-gradient(to right, #f8f8f8, #e1e1e1); /* Smooth gradient */
  text-align: center;
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
`;

const Title = styled.h1`
  color: #0b486b;
  font-family: 'Merriweather', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 1.5s ease-out, zoomIn 1.5s ease-out;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    color: #f5623b;
    text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); /* Hover effect */
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const zoomIn = `
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const gradientAnimation = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Testimonials;
