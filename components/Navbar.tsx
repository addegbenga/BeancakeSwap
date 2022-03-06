import { NextPage } from "next";
import { useState, useContext } from "react";
import { FaWallet } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiTwotoneSetting, AiOutlineEllipsis } from "react-icons/ai";
import { metamaskContext } from "../context/walletContext";
import Link from "next/link";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import PopOver from "./PopOver";
import MyModal from "./Modal";

const Navbar: NextPage = () => {
  const walletAddress = useContext(metamaskContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openPop, setOpenPop] = useState<boolean>(false);
  // eslint-disable-next-line no-undef

  const handleOpenWeb3Modal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onMouseLeave={() => setOpenPop(false)}
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
          <>
            {walletAddress.wallets ? (
              <button onClick={() => setOpenPop(true)} className="relative">
                <div className="flex bg-[#353547] rounded-full gap-2 pr-2 items-center">
                  <div className="bg-black p-1.5 border-2 border-[#1fc7d4] rounded-full">
                    <FaWallet className="text-[#1fc7d4]" />
                  </div>

                  <span className="text-[#aea4c7] w-20 truncate font-bold text-sm">
                    {walletAddress.wallets &&
                      walletAddress.wallets.signedAddress}
                  </span>
                  <IoIosArrowDown size={20} className="text-[#aea4c7]" />
                </div>
                <PopOver isOpen={openPop} setIsOpen={setOpenPop} />
              </button>
            ) : (
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
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
