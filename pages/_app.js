import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/Global";
import { theme } from "../styles/Theme";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
