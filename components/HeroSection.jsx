import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.purpleNeon},
    ${({ theme }) => theme.colors.black}
  );
`;

const CallToAction = styled.button`
  margin-top: 20px;
`;

const HeroSection = ({ openModal }) => (
  <HeroContainer>
    <h1 style={{ color: "white", fontSize: "4rem" }}>TQA</h1>
    <p style={{ color: "white", fontSize: "1.5rem" }}>
      Innovation. Sensuality. Growth.
    </p>
    <CallToAction onClick={openModal}>Apply Now</CallToAction>
  </HeroContainer>
);

export default HeroSection;
