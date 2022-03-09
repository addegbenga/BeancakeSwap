import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import type { AppProps } from "next/app";
import { MetamaskProvider } from "../context/walletContext";

function MyApp({ Component, pageProps }: AppProps) {
  // (window as any).onload = function () {
  //   // eslint-disable-next-line no-undef
  //   localStorage.clear();
  // };

  // useEffect(() => {
  //   window.onload = function () {
  //     localStorage.clear();
  //   };
  // }, []);

  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    library.pollingInterval = 15000;
    return library;
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <Component {...pageProps} />
      </MetamaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
