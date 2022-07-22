import React from "react";
import { createGlobalStyle } from "styled-components";
export const AppStyles = createGlobalStyle`
  *{padding: 0;
  margin: 0;
  box-sizing: border-box;}
  body{
    
font-family: 'Playfair Display', serif;
::-webkit-scrollbar {
        width: 0.7rem;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #21605d;
        background: #ace8e5;
        border-radius: 1px;
      }
      ::-webkit-scrollbar-thumb {
        background: #21605d;
        border-radius: 5px;
        border: 1px solid #ace8e5 ;
      }
    
  }
`;
