import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  background: ${({ theme }) => theme.primary};

  color-scheme: dark;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: ${({ theme }) => theme.white};
}

*, button, input {
  border: 0;
  background: none;
  font-family: -apple-system, system-ui, sans-serif
}

html, body, #appRoot {
  max-height: 100vh;
  max-width: 100vw;

  height
  width: 100%;
}
`;
