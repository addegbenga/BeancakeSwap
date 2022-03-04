import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { ethers } from "ethers";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import WalletConnectProvider from "@walletconnect/web3-provider";

type props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const provider = new WalletConnectProvider({
  infuraId: "209f2acd12054d99b32ca59bedda84e0",
});

const MyModal: NextPage<props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<object | string | any>();
  function closeModal() {
    setIsOpen(false);
  }

  async function handleOpenWeb3Modal() {
    try {
      await provider.enable();
    } catch (error) {
      router.reload();
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      const tests = async () => {
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        const accounts = await provider.listAccounts();
        if ((accounts as any) > 1) {
          // eslint-disable-next-line no-undef
          const wallet = JSON.parse(localStorage.getItem("addrr"));
          setWalletAddress(wallet && wallet);
        } else {
          // eslint-disable-next-line no-undef
          localStorage.removeItem("addrr");
        }
      };
      tests();
    }
  }, []);

  const handleChainIdChange = async () => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    try {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner();
      const signedAddress = await signer.getAddress();
      const network = await provider.getNetwork();
      const balance = await provider.getBalance(signedAddress);
      const convertedBalance = ethers.utils.formatEther(balance);
      // eslint-disable-next-line no-undef
      localStorage.setItem(
        "addrr",
        JSON.stringify({
          signedAddress: signedAddress,
          connected: true,
          balance: convertedBalance,
          network: network.name,
        })
      );
      // eslint-disable-next-line no-undef
      const localss = JSON.parse(localStorage.getItem("addrr"));
      setWalletAddress(localss && localss);
    } catch (error) {
      // eslint-disable-next-line no-undef
      localStorage.removeItem("addrr");
      setWalletAddress("");
    }

    // window.location.reload();
  };

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

  const requestAccount = async () => {
    try {
      if (typeof (window as any).ethereum !== "undefined") {
        console.log("hit here");
        let localss: any;
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        const signer = provider.getSigner();
        const signedAddress = await signer.getAddress();
        const balance = await provider.getBalance(signedAddress);
        const network = await provider.getNetwork();
        const convertedBalance = ethers.utils.formatEther(balance);
        // eslint-disable-next-line no-undef
        localss = localStorage.setItem(
          "addrr",
          JSON.stringify({
            signedAddress: signedAddress,
            connected: true,
            balance: convertedBalance,
            network: network.name,
          })
        );
        // eslint-disable-next-line no-undef
        localss = JSON.parse(localStorage.getItem("addrr"));
        setWalletAddress(localss && localss);
        closeModal();
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed bg-white bg-opacity-30 inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm  my-8 pb-5 overflow-hidden text-left align-middle transition-all transform bg-[#27262c] shadow-xl rounded-3xl">
                <div className="flex justify-between items-center bg-[#35364e] px-5 py-6">
                  <h1 className="font-semibold text-white">Connect wallet</h1>
                  <button onClick={closeModal}>
                    <FaTimes color="#1cadb9" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-10 border-b border-gray-100 border-opacity-10 py-10 ">
                  <div className="flex items-center flex-col">
                    <Image src="/metamask.svg" height={40} width={40} />
                    <button
                      onClick={requestAccount}
                      className="text-sm text-white"
                    >
                      Metamask
                    </button>
                  </div>
                  <div
                    onClick={handleOpenWeb3Modal}
                    className="flex items-center flex-col"
                  >
                    <Image src="/wconnect.svg" height={40} width={40} />
                    <button className="text-sm text-white">
                      Walletconnect
                    </button>
                  </div>{" "}
                  <div className="flex items-center flex-col">
                    <Image src="/trust.svg" height={40} width={40} />
                    <h1 className="text-sm text-white">Metamask</h1>
                  </div>{" "}
                  <div className="flex  items-center flex-col">
                    <AiOutlineEllipsis color="#b8add2" size={40} />
                    <h1 className="text-sm text-white ">More</h1>
                  </div>
                </div>
                <div className="py-5 flex flex-col gap-3  ">
                  <h1 className="text-center text-[#b8add2]">
                    Haven't got a crypto wallet yet?
                  </h1>
                  <button className="bg-[#b8add2] text-[#27262c] mx-8 rounded-md py-2">
                    Learn How to Connect
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
