import { NextPage } from "next";
import Image from "next/image";

const Cake: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="container lg:max-w-4xl  lg:mx-auto lg:px-0 px-6 pt-24 pb-20 lg:pb-44">
        <div className="flex relative">
          <div className="absolute right-0 w-60 lg:w-[28rem]  ">
            <Image
              src="/cake.webp"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="absolute w-60  lg:w-[28rem]  right-0">
            <Image
              src="/btc.webp"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="absolute w-60   lg:w-[28rem]  right-0">
            <Image
              src="/bnb.webp"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
        <div className="mt-56 pt-10 lg:mt-24 lg:max-w-sm">
          <h1 className="text-3xl lg:text-4xl font-bold text-white text-opacity-80 lg:text-opacity-100">
            <span className="text-[#9a6aff]">Cake</span> makes our world go
            round.
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
        <div className="grid grid-cols-2 lg:grid-cols-4 my-4 lg:mt-20">
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
