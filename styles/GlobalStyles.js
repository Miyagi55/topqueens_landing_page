import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: black;
    color: white;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.redNeon};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: transform 0.3s;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export default GlobalStyles;
