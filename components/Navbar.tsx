import { NextPage } from "next";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { FaWallet } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiTwotoneSetting, AiOutlineEllipsis } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import PopOver from "./PopOver";
import MyModal from "./Modal";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openPop, setOpenPop] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<any>();
  const handleOpenWeb3Modal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      const tests = async () => {
        try {
          const providers = new ethers.providers.Web3Provider(
            (window as any).ethereum
          );

          const signer = providers.getSigner();
          const signedAddress = await signer.getAddress();
          const network = await providers.getNetwork();
          const balance = await providers.getBalance(signedAddress);
          const convertedBalance = ethers.utils.formatEther(balance);
          const accounts = await providers.listAccounts();

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
        }
      };
      tests();
    }
  });
  const handleChainIdChange = async () => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    try {
      const providers = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = providers.getSigner();
      const signedAddress = await signer.getAddress();
      const network = await providers.getNetwork();
      const balance = await providers.getBalance(signedAddress);
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
  return (
    <>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onMouseLeave={() => {
          setOpenPop(false);
        }}
        className="bg-[#27262c] relative border-b border-white border-opacity-20 "
      >
        <div className="flex container  lg:mx-auto items-center  shadow-lg p-3 py-4 justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center gap-1 ">
              <div className="w-6">
                <Image
                  src="/logo.svg"
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </div>
              <h1 className="text-white text-lg font-bold hidden lg:block">
                PancakeSwap
              </h1>
            </div>
            <div className="hidden  text-white ml-10 gap-7 lg:flex items-center ">
              <h1 className="text-[#aea4c7] text-sm">Trade</h1>
              <span className=" text-[#aea4c7] text-sm">
                {" "}
                <Link href="/earn"> Earn</Link>{" "}
              </span>

              <span className="text-[#aea4c7] text-sm">
                {" "}
                <Link href="/nft"> NFT</Link>
              </span>
              <button>
                <AiOutlineEllipsis size={24} className="text-[#aea4c7]" />
              </button>
            </div>
          </div>

          {!walletAddress ? (
            <div className="flex gap-5 items-center">
              <BsGlobe className="text-xl text-[#aea4c7]" />
              <AiTwotoneSetting className="text-2xl text-[#aea4c7]" />
              <button
                onClick={handleOpenWeb3Modal}
                className="bg-[#1fc7d4] font-semibold text-white p-1.5 px-3 rounded-full"
              >
                connect wallet
              </button>
            </div>
          ) : (
            <button
              onMouseEnter={() => {
                setOpenPop(true);
              }}
              className="relative"
            >
              <div className="flex bg-[#353547] rounded-full gap-2 pr-2 items-center">
                <div className="bg-black p-1.5 border-2 border-[#1fc7d4] rounded-full">
                  <FaWallet className="text-[#1fc7d4]" />
                </div>

                <span className="text-[#aea4c7] w-20 truncate font-bold text-sm">
                  {walletAddress.signedAddress}
                </span>
                <IoIosArrowDown size={20} className="text-[#aea4c7]" />
              </div>
              <PopOver isOpen={openPop} setIsOpen={setOpenPop} />
            </button>
            // walletAddress.signedAddress
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
