import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.redNeon};
  font-family: 'Arial', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.purpleNeon};
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>TQA</Logo>
    <Nav>
      <a href="#about">About</a>
      <a href="#apply">Apply</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
