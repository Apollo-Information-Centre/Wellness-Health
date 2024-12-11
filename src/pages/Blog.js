import React from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const blogData = [
    {
      title: 'Top 5 Wellness Trends for 2024',
      description:
        'Explore the latest wellness trends shaping the industry, from digital detoxes to sustainable retreats.',
      image: '/assets/images/wellness-trends.jpg',
      link: '/blog/wellness-trends-2024',
    },
    {
      title: 'Health Check-Up: Why It’s Important',
      description:
        'Discover the benefits of regular health check-ups and how they can improve your overall well-being.',
      image: '/assets/images/health-checkup.jpg',
      link: '/blog/importance-of-health-checkups',
    },
    {
      title: 'Mindfulness Practices for Busy Professionals',
      description:
        'Learn simple mindfulness techniques to stay calm and focused, even with a hectic schedule.',
      image: '/assets/images/mindfulness.jpg',
      link: '/blog/mindfulness-for-professionals',
    },
  ];

  return (
    <Wrapper>
      <Title>Our Latest Blogs</Title>
      <BlogGrid>
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            link={blog.link}
          />
        ))}
      </BlogGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6rem 2rem; /* Increased padding for a spacious feel */
  background: linear-gradient(to right, #f8f8f8, #e3e3e3); /* Smooth gradient */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow to create depth */
`;

const Title = styled.h1`
  color: #0b486b;
  font-family: 'Merriweather', serif;
  font-size: 3.8rem; /* Larger title size */
  font-weight: 700;
  margin-bottom: 3rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 1.5s ease-out;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15); /* Subtle text shadow for elegance */
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Flexible grid for responsiveness */
  gap: 3rem; /* Spacious gap */
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  transition: all 0.3s ease;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Adjust column widths for smaller screens */
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

export default Blog;
