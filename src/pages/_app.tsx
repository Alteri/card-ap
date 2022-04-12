import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { GlobalStyle } from "components/Global/globalStyle";
import { Page } from "components/Page";
import { store } from "store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
};

export default MyApp;
