import { useState, createContext, useEffect } from "react";
import { NextPage } from "next";
import { ethers } from "ethers";

export const metamaskContext = createContext(null);

export const MetamaskProvider: NextPage = ({ children }) => {
  const [wallets, setWalletAddress] = useState<any>();
  const tests = async () => {
    try {
      const providers = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
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
    <metamaskContext.Provider value={{ wallets: wallets }}>
      {children}
    </metamaskContext.Provider>
  );
};
