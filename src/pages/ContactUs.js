import React, { useState } from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleBooking = () => {
    alert('Your booking has been confirmed!');
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
        <BookingButton onClick={handleBooking}>Book an Appointment</BookingButton>
      </Form>

      <ContactInfo>
        <p>Email: <a href="mailto:support@wellnessretreat.com">support@wellnessretreat.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
      </ContactInfo>

      <WhatsAppButton href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon src="/assets/images/whatsapp-icon.png" alt="WhatsApp" />
      </WhatsAppButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #faf3e3, #f1e0a1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative; 
  background-size: 200% 200%;
  animation: gradientAnimation 10s ease infinite; /* Smooth background gradient animation */
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Merriweather', serif;
  color: #0b486b;
  margin-bottom: 2rem;
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 1.5s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #d4af37;
  border-radius: 8px;
  font-size: 1.1rem;
  width: 100%;
  background-color: #fff;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    border: 1px solid #f5623b;
    box-shadow: 0 0 5px rgba(245, 98, 59, 0.5);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #d4af37;
  border-radius: 8px;
  font-size: 1.1rem;
  width: 100%;
  height: 150px;
  resize: none;
  background-color: #fff;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    border: 1px solid #f5623b;
    box-shadow: 0 0 5px rgba(245, 98, 59, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #f5623b;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  width: 100%;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #d4af37;
    transform: translateY(-2px);
  }
`;

const BookingButton = styled.button`
  padding: 1rem;
  background-color: #d4af37;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  width: 100%;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #f5623b;
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #555;
  margin-top: 3rem;
  p {
    font-size: 1rem;
  }
  a {
    color: #0b486b;
    text-decoration: none;
    &:hover {
      color: #f5623b;
    }
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

export default ContactUs;
