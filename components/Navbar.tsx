import { NextPage } from "next";
import { AiTwotoneSetting, AiOutlineEllipsis } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";

const Navbar: NextPage = () => {
  return (
    <div className="bg-[#27262c] border-b border-white border-opacity-20 ">
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
            <Link href="/earn"> Earn</Link>

            <h1 className="text-[#aea4c7] text-sm">Win</h1>

            <Link href="/nft"> NFT</Link>
            <button>
              <AiOutlineEllipsis size={24} className="text-[#aea4c7]" />
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <BsGlobe className="text-xl text-[#aea4c7]" />
          <AiTwotoneSetting className="text-2xl text-[#aea4c7]" />
          <button className="bg-[#1fc7d4] font-semibold text-white p-1.5 px-3 rounded-full">
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
