// App is the entry component for the project. Component prop is the
// page which will render through this App component.
import '../styles/global.css';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
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

WithTheme.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {
  pageProps: null,
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.any,
};

export default App;
