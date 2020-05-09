// App is the entry component for the project. Component prop is the
// page which will render through this App component.
import '../styles/globalStyles.css';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import gloablStyles from '../styles/globalStyles';
import Head from 'next/head';

const WithTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={gloablStyles} />
      {children}
    </ThemeProvider>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157125298-2"></script>
      <script dangerouslySetInnerHTML={
          {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-157125298-2");
        `}
        }
      >
      </script>
      </Head>
      <WithTheme>
        <Component {...pageProps} />
      </WithTheme>
    </>
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
