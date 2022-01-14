import { createGlobalStyle, css } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  /* same as before */
  h1 {
    font-size: 48px;
    line-height: 60px;
  }
  h2 {
    font-size: 34px;
    line-height: 50px;
    border-bottom: 0 !important;
  }
  h3 {
    font-size: 28px;
    line-height: 38px;
  }
  h4 {
    font-size: 18px;
    line-height: 22px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;