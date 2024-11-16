import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FormModal from "./components/FormModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeroSection openModal={() => setIsModalOpen(true)} />
      <AboutSection />
      <Footer />
      {isModalOpen && <FormModal closeModal={() => setIsModalOpen(false)} />}
    </ThemeProvider>
  );
};

export default App;
