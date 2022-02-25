import { NextPage } from "next";
import { AiTwotoneSetting } from "react-icons/ai";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";

const Navbar: NextPage = () => {
  return (
    <div>
      <div className="flex bg-[#27262c] items-center  shadow-lg p-3 py-4 justify-between">
        <Image src="/logo.svg" width={40} height={40} />
        <div className="flex gap-5 items-center">
          <BsGlobe className="text-xl text-[#aea4c7]" />
          <AiTwotoneSetting className="text-2xl text-[#aea4c7]" />
          <button className="bg-[#1fc7d4] font-semibold text-white p-2.5 px-3 rounded">
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
