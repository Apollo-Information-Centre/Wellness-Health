import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, image, link }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMore to={link}>Read More</ReadMore>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 320px;
  border: 1px solid #d4af37;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
  transition: transform 0.3s, box-shadow 0.3s ease-out;
  
  /* Hover effect with 3D effect */
  &:hover {
    transform: translateY(-12px) scale(1.08);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3); /* Deep shadow */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #d4af37; /* Divider between image and content */
`;

const CardContent = styled.div`
  padding: 1.5rem;
  transition: padding 0.3s ease;
  background-color: #f5f5f5; /* Soft background color */
`;

const Title = styled.h3`
  font-family: 'Merriweather', serif;
  color: #0b486b;
  margin: 0.5rem 0;
  font-size: 1.7rem; /* Slightly larger font */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  /* Subtle animation on hover */
  &:hover {
    color: #f5623b; /* Highlight color */
    transform: translateX(5px); /* Slight movement effect */
  }
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  font-size: 1.1rem;
  margin: 1rem 0;
  line-height: 1.8; /* Increased line height for readability */
  transition: color 0.3s ease;
  
  /* Subtle hover effect for description */
  &:hover {
    color: #f5623b; /* Color change on hover */
  }
`;

const ReadMore = styled(Link)`
  font-family: 'Roboto', sans-serif;
  color: #d4af37;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: #f5623b;
  border-radius: 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Hover effect for the "Read More" button */
  &:hover {
    background-color: #d4af37;
    color: #fff;
    transform: translateY(-4px); /* Lift effect */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Strong shadow on hover */
  }
  
  /* Active state for the button */
  &:active {
    transform: translateY(2px); /* Slight press effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export default BlogCard;
