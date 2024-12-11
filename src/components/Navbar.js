import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Nav>
      <Logo>Wellness</Logo>
      {/* Menu for Desktop */}
      <Menu isMenuOpen={isMenuOpen}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/packages">Packages</NavItem>
        <NavItem to="/wellness-centers">Centers</NavItem>
        <NavItem to="/about-us">About Us</NavItem>
        <NavItem to="/contact-us">Contact</NavItem>
        {/* Hidden items on larger screens */}
        <NavItem to="/testimonials">Testimonials</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </Menu>

      {/* Hamburger Menu */}
      <HamburgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #faf3e3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.h1`
  font-family: 'Merriweather', serif;
  color: #d4af37;
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    /* Hide the menu items by default on small screens */
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1rem;
    background-color: #faf3e3;
    padding: 1rem;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #0b486b;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  &:hover {
    color: #f5623b;
    transition: color 0.3s ease;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30px;
    height: 25px;
  }

  div {
    width: 30px;
    height: 4px;
    background-color: #0b486b;
    transition: transform 0.3s ease;
    &:nth-child(1) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'scale(0)' : 'scale(1)'};
    }
    &:nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
    }
  }
`;

export default Navbar;
