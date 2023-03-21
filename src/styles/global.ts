import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
--primary: #B75BFF;
--background: linear-gradient(243.47deg, #964ECF 0%, #7637A7 10.37%, #1D184F 70.02%);;

--white:#ffffff;
--black:#000000;
}

*{
  margin: 0;
  padding: 0;
box-sizing: border-box;
}

body{
    background-color: var(--primary);
    background-image: var(--background);
    
    width: 100vw;
    height: 100vh;
    }

    html{
      @media (max-width:1080px) {
      font-size: 93.75%; //15pixels
      }
      @media (max-width:720px) {
      font-size: 87.5%; //15pixels
    }}
    
`;
