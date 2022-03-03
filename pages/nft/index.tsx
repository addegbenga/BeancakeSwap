import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import MobileNavigation from "../../components/MobileNavigation";
import Footer from "../../components/Footer";

const NftPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#08060b]">
        <div className="flex  bg-[#1d1d22]  px-6  lg:px-0 lg:justify-center text-sm lg:mx-auto py-4  font-medium text-[#aea4c7] gap-5">
          <Link href="/nft"> Overview</Link>
          <Link href="/nft/collections"> Collections</Link>
          <Link href="/nft/activity"> Activity</Link>
          {/* <h1 className="text-[#c1bed3]">Pools</h1> */}
        </div>
        <div className="bg-[#363559]">
          <div className=" max-w-6xl mx-auto lg:items-center lg:flex lg:justify-between lg:py-12 p-6 lg:p-0 py-7">
            <div>
              <h1 className="text-[#9a6aff]  text-4xl lg:text-6xl font-black mb-4">
                NFT Market
              </h1>
              <p className=" text-[#f4eeff] lg:text-lg font-semibold">
                Buy and Sell NFTs on BNB Smart Chain
              </p>
            </div>
            <div className=" ">
              <input
                type="search"
                className="bg-[#27262c] grid mt-3 lg:mt-0 placeholder-[#b8add2] border border-[#08060b] text-sm rounded-xl p-2.5 pr-20 pl-4"
                placeholder="Search address"
              />
            </div>
          </div>
        </div>

        <div className="py-10 max-w-6xl px-3 lg:px-0 mx-auto">
          <div>
            <div className="flex justify-between py-8">
              <h1 className="text-white text-2xl font-bold">
                Newest Collection
              </h1>
              <button className="border-[#1fc7d4] border rounded-full px-8 py-1 text-[#1fc7d4]">
                View all
              </button>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 6, 7, 8, 9, 10].fill(1, 2, 3).map((item, idx) => (
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
      <MobileNavigation />
      <Footer />
    </>
  );
};

export default NftPage;
