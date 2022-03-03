import { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";
import Image from "next/image";
import { AiOutlineCaretDown } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NftCollections: NextPage = () => {
  const [drop, setDrop] = useState<boolean>(false);

  const handleDropDown = () => {
    setDrop(!drop);
  };
  const DropDown = () => (
    <>
      <div className=" ">
        <div className="w-44 ">
          <div className="relative z-20 ">
            <div
              className={` ${
                drop
                  ? " rounded-t-2xl "
                  : "rounded-2xl transition-all  delay-100 ease-in-out"
              }  bg-[#372f47]  text-[#f4eeff]  flex p-2 justify-between`}
            >
              <h1 className="text-[#c1bed3]">Select</h1>
              <button onClick={handleDropDown}>
                <AiOutlineCaretDown />
              </button>
            </div>
            <ul
              className={`${
                drop ? " transition-all h-48  ease-in-out  duration-300 " : ""
              }  bg-[#372f47] rounded-b-2xl font-medium gap-3 text-[#f4eeff]  flex flex-col h-0 px-2  absolute w-full   overflow-y-hidden  transition-all ease-in-out  `}
            >
              <li className="mt-4">APR</li>
              <li>Multiplier</li>
              <li>Earned</li>
              <li>Liquidity</li>
              <li>Latest</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <div className="bg-[#08060b]">
        <div className="flex bg-[#1d1d22] lg:justify-center lg:mx-auto py-4 px-6 lg:px-0 font-medium text-sm text-white gap-5">
          <Link href="/nft"> Overview</Link>
          <Link href="/nft/collections"> Collections</Link>
          <Link href="/nft/activity"> Activity</Link>
          {/* <h1 className="text-[#c1bed3]">Pools</h1> */}
        </div>
        <div className="bg-[#363559] ">
          <div className=" max-w-6xl mx-auto lg:items-center lg:flex lg:justify-between lg:py-12 p-6 lg:p-0 py-8">
            <div>
              <h1 className="text-[#9a6aff]  text-4xl lg:text-6xl font-black mb-4">
                Collections
              </h1>
            </div>
          </div>
        </div>

        <div className="pb-28 max-w-6xl  px-3 lg:px-0   mx-auto">
          <div>
            <div className=" flex lg:justify-end pt-10  pb-3">
              <DropDown />
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 6, 7, 9, 10, 11].fill(1, 2, 3).map((item, idx) => (
                <div
                  key={idx}
                  className=" border rounded-bl-[3.7rem] rounded-xl border-gray-300 border-opacity-30 bg-[#27262c] p-2  w-90 "
                >
                  <Image
                    src="/banner-sm.png"
                    className="rounded "
                    width={200}
                    height={80}
                    layout="responsive"
                  />
                  <div className="flex justify-between ">
                    <div className="-mt-10 h-[6rem] w-[6rem] rounded-full flex items-center p-1 relative z-10 bg-red-100">
                      <Image
                        src="/avatar.png"
                        className="rounded-full border border-white"
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className="flex flex-col pt-2">
                      <h1 className="text-white font-semibold">
                        Liquid Monsters
                      </h1>
                      <div className="flex gap-2 items-center ">
                        <p className="text-[#b8add2] text-xs">Volume</p>
                        <Image src="/bnbs.svg" width={15} height={15} />
                        <p className="text-white">63.80183</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NftCollections;
