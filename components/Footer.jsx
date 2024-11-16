import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()} TopQueens Agency. All rights reserved.</p>
    <p>
      Follow us on{" "}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        Instagram
      </a>
    .
    </p>
  </FooterContainer>
);

export default Footer;
