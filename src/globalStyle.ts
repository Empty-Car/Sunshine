import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0D1117;

    /* font-family: 'Inter', sans-serif */
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  ::placeholder{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
`;

export default GlobalStyle;