import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
      text-decoration: none;
      color: inherit;
    }
    *{
      box-sizing: border-box;
    }
    input, textarea {
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    
    h1 {
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    
    h2 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    
    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    
    p {
      font-size: 0.875rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    
`;

export default GlobalStyles;