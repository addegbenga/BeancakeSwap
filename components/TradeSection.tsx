import { NextPage } from "next";
import Image from "next/image";

const TradeSection: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="container px-6 pt-24 pb-20">
        <div className="flex relative">
          <div className="absolute right-0  ">
            <Image src="/cake.webp" width={200} height={200} />
          </div>
          <div className="absolute right-0">
            <Image src="/btc.webp" width={200} height={200} />
          </div>
          <div className="absolute right-0">
            <Image src="/bnb.webp" width={200} height={200} />
          </div>
        </div>
        <div className="mt-56">
          <h1 className="text-3xl font-bold text-white text-opacity-80">
            <span className="text-[#9a6aff]">Trade</span> anything. No
            registration, no hassle.
          </h1>
          <p className=" text-[#aea4c7] text-[1rem] py-4">
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet{" "}
          </p>
          <div className="flex gap-4 py-4">
            <button className="text-white bg-[#1fc7d4] p-2.5 rounded px-6">
              Trade Now
            </button>
            <button className="text-[#1fc7d4] font-bold">Learn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeSection;
