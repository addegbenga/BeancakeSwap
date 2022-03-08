import { useState, createContext, useEffect } from "react";
import { NextPage } from "next";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const metamaskContext = createContext(null);
const provider = new WalletConnectProvider({
  infuraId: "209f2acd12054d99b32ca59bedda84e0",
});

export const MetamaskProvider: NextPage = ({ children }) => {
  const router = useRouter();
  const [wallets, setWalletAddress] = useState<any>();
  const [myproviders, setMyProviders] = useState<any>();

  // useEffect(() => {
  //   // Use the mainnet
  //   const providerrr = ethers.getDefaultProvider("ropsten", {
  //     infura: "https://ropsten.infura.io/v3/209f2acd12054d99b32ca59bedda84e0",
  //   });
  //   console.log(providerrr);

  // }, []);
  async function handleOpenWeb3Modal() {
    try {
      await provider.enable();
      if (provider.connected) {
        const signedAddress = provider.accounts[0];
        setWalletAddress({
          signedAddress,
        });
      }
    } catch (error) {
      router.reload();
      console.log(error);
    }
  }

  const tests = async () => {
    try {
      const providers = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      if (typeof (window as any).ethereum !== "undefined") {
        setMyProviders(providers);
      } else {
        setMyProviders(provider);
      }

      const signer = providers.getSigner();
      const accounts = await providers.listAccounts();
      const signedAddress = await signer.getAddress();
      const network = await providers.getNetwork();
      const balance = await providers.getBalance(signedAddress);
      const convertedBalance = ethers.utils.formatEther(balance);

      if ((accounts as any) > 1) {
        // eslint-disable-next-line no-undef
        setWalletAddress({
          signedAddress,
          network,
          convertedBalance,
        });
      } else {
        setWalletAddress(null);
      }
    } catch (error) {
      console.log(error);
      setWalletAddress(null);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    if (typeof (window as any).ethereum !== "undefined") {
      tests();
    }
    return () => {
      controller?.abort();
    };
  }, []);
  const handleChainIdChange = async () => {
    try {
      const providers = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = providers.getSigner();
      const signedAddress = await signer.getAddress();
      const network = await providers.getNetwork();
      const balance = await providers.getBalance(signedAddress);
      const convertedBalance = ethers.utils.formatEther(balance);
      setWalletAddress({
        signedAddress,
        network,
        convertedBalance,
      });
      // eslint-disable-next-line no-undef
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.log(error);
      setWalletAddress(null);
    }
    // window.location.reload();
  };

  const handelAccountChange = async () => {
    try {
      const providers = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const accounts = await providers.listAccounts();
      const signer = providers.getSigner();
      const signedAddress = await signer.getAddress();
      const network = await providers.getNetwork();
      const balance = await providers.getBalance(signedAddress);
      const convertedBalance = ethers.utils.formatEther(balance);
      if ((accounts as any) > 1) {
        // eslint-disable-next-line no-undef
        setWalletAddress({
          signedAddress,
          network,
          convertedBalance,
        });
      } else {
        setWalletAddress("");
      }
    } catch (error) {
      console.log(error);
      setWalletAddress(null);
    }
  };
  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      (window as any).ethereum.on("accountsChanged", handelAccountChange);

      return () => {
        (window as any).ethereum.removeListener(
          "accountsChanged",
          handelAccountChange
        );
      };
    }
  }, []);

  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      (window as any).ethereum.on("chainChanged", handleChainIdChange);

      return () => {
        (window as any).ethereum.removeListener(
          "chainChanged",
          handleChainIdChange
        );
      };
    }
  }, []);

  return (
    <metamaskContext.Provider
      value={{
        wallets: wallets,
        myproviders: myproviders,
        handleOpenWeb3Modal,
      }}
    >
      {children}
    </metamaskContext.Provider>
  );
};
