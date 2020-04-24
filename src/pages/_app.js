// App is the entry component for the project. Component prop is the
// page which will render through this App component.
import '../styles/global.css';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme from '../styles/theme';
import gloabl from '../styles/global';

const WithTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={gloabl} />
      {children}
    </ThemeProvider>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <WithTheme>
      <Component {...pageProps} />
    </WithTheme>
  );
};

export default App;
