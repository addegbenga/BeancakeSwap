import { NextPage } from "next";
import Image from "next/image";

const Cake: NextPage = () => {
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
            <span className="text-[#9a6aff]">Cake</span> makes our world go
            round.
          </h1>
          <p className=" text-[#aea4c7] text-[1rem] py-4">
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </p>
          <div className="flex gap-4 py-4">
            <button className="text-white bg-[#1fc7d4] p-2.5 rounded px-6">
              Trade Now
            </button>
            <button className="text-[#1fc7d4] font-bold">Learn</button>
          </div>
        </div>
        <div className="grid grid-cols-2 my-4">
          <div className="mb-4">
            <p className="text-white text-sm text-[#aea4c7]">Total supply</p>
            <h1 className="text-xl text-white font-semibold">271,360,581</h1>
          </div>
          <div className="mb-4">
            <p className="text-white text-sm  text-[#aea4c7]">Burned to date</p>
            <h1 className="text-xl text-white font-semibold">379,553,744</h1>
          </div>{" "}
          <div className="mb-4">
            <p className="text-white text-sm text-[#aea4c7]">Market cap</p>
            <h1 className="text-xl text-white font-semibold">$1.8 billion</h1>
          </div>{" "}
          <div className="mb-4">
            <p className="text-white text-sm  text-[#aea4c7]">
              Current emissions
            </p>
            <h1 className="text-xl text-white font-semibold">14.25/block</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cake;
