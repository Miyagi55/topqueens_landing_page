import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.purpleNeon};
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const AboutSection = () => (
  <AboutContainer id="about">
    <AboutHeading>About TQA</AboutHeading>
    <AboutText>
      At TopQueens Agency, we empower digital models to unlock their full
      potential. Through personalized branding, innovative strategies, and a
      focus on growth, we help you turn your unique style into a global
      phenomenon. Join us and experience the ultimate journey to digital stardom.
    </AboutText>
  </AboutContainer>
);

export default AboutSection;
