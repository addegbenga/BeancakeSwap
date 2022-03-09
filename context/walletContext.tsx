import { createContext, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { NextPage } from "next";
import {
  injected,
  walletconnect,
  resetWalletConnector,
} from "../helpers/connectors";

export const metamaskContext = createContext(null);

export const MetamaskProvider: NextPage = ({ children }) => {
  const web3reactContext = useWeb3React();

  const connectWalletConnectSimple = async () => {
    try {
      resetWalletConnector(walletconnect);
      await web3reactContext.activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  };
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    library.pollingInterval = 15000;
    console.log(library);
    return library;
  };

  useEffect(() => {
    const connectOnPageReload = async () => {
      if (window.localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await web3reactContext.activate(injected);
          window.localStorage.setItem("isWalletConnected", true as any);
        } catch (error) {}
      }
    };
    connectOnPageReload();
  }, []);

  const connectMetamaskSimple = async () => {
    try {
      await web3reactContext.activate(injected);
      window.localStorage.setItem("isWalletConnected", true as any);
    } catch (ex) {
      console.log(ex);
    }
    console.log(web3reactContext);
  };
  const disconnectMetamaskSimple = () => {
    try {
      web3reactContext.deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  // async function handleOpenWeb3Modal() {
  //   try {
  //     await provider.enable();
  //     if (provider.connected) {
  //       const signedAddress = provider.accounts[0];
  //       setWalletAddress({
  //         signedAddress,
  //       });
  //     }
  //   } catch (error) {
  //     router.reload();
  //     console.log(error);
  //   }
  // }

  // const tests = async () => {
  //   try {
  //     const providers = new ethers.providers.Web3Provider(
  //       (window as any).ethereum
  //     );
  //     if (typeof (window as any).ethereum !== "undefined") {
  //       setMyProviders(providers);
  //     } else {
  //       setMyProviders(provider);
  //     }

  //     const signer = providers.getSigner();
  //     const accounts = await providers.listAccounts();
  //     const signedAddress = await signer.getAddress();
  //     const network = await providers.getNetwork();
  //     const balance = await providers.getBalance(signedAddress);
  //     const convertedBalance = ethers.utils.formatEther(balance);

  //     if ((accounts as any) > 1) {
  //       // eslint-disable-next-line no-undef
  //       setWalletAddress({
  //         signedAddress,
  //         network,
  //         convertedBalance,
  //       });
  //     } else {
  //       setWalletAddress(null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setWalletAddress(null);
  //   }
  // };
  // useEffect(() => {
  //   const controller = new AbortController();
  //   if (typeof (window as any).ethereum !== "undefined") {
  //     tests();
  //   }
  //   return () => {
  //     controller?.abort();
  //   };
  // }, []);
  // const handleChainIdChange = async () => {
  //   try {
  //     const providers = new ethers.providers.Web3Provider(
  //       (window as any).ethereum
  //     );
  //     const signer = providers.getSigner();
  //     const signedAddress = await signer.getAddress();
  //     const network = await providers.getNetwork();
  //     const balance = await providers.getBalance(signedAddress);
  //     const convertedBalance = ethers.utils.formatEther(balance);
  //     setWalletAddress({
  //       signedAddress,
  //       network,
  //       convertedBalance,
  //     });
  //     // eslint-disable-next-line no-undef
  //   } catch (error) {
  //     // eslint-disable-next-line no-undef
  //     console.log(error);
  //     setWalletAddress(null);
  //   }
  //   // window.location.reload();
  // };

  // const handelAccountChange = async () => {
  //   try {
  //     const providers = new ethers.providers.Web3Provider(
  //       (window as any).ethereum
  //     );
  //     const accounts = await providers.listAccounts();
  //     const signer = providers.getSigner();
  //     const signedAddress = await signer.getAddress();
  //     const network = await providers.getNetwork();
  //     const balance = await providers.getBalance(signedAddress);
  //     const convertedBalance = ethers.utils.formatEther(balance);
  //     if ((accounts as any) > 1) {
  //       // eslint-disable-next-line no-undef
  //       setWalletAddress({
  //         signedAddress,
  //         network,
  //         convertedBalance,
  //       });
  //     } else {
  //       setWalletAddress("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setWalletAddress(null);
  //   }
  // };
  // useEffect(() => {
  //   if (typeof (window as any).ethereum !== "undefined") {
  //     (window as any).ethereum.on("accountsChanged", handelAccountChange);

  //     return () => {
  //       (window as any).ethereum.removeListener(
  //         "accountsChanged",
  //         handelAccountChange
  //       );
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   if (typeof (window as any).ethereum !== "undefined") {
  //     (window as any).ethereum.on("chainChanged", handleChainIdChange);

  //     return () => {
  //       (window as any).ethereum.removeListener(
  //         "chainChanged",
  //         handleChainIdChange
  //       );
  //     };
  //   }
  // }, []);

  return (
    <metamaskContext.Provider
      value={{
        connectWalletConnectSimple,
        connectMetamaskSimple,
        disconnectMetamaskSimple,
        getLibrary,
      }}
    >
      {children}
    </metamaskContext.Provider>
  );
};
