// App is the entry component for the project. Component prop is the
// page which will render through this App component. 

import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';

const WithTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const App = ({ Component, pageProps }) => {
    return <WithTheme>
        <Component {...pageProps} />
    </WithTheme>
};

export default App;