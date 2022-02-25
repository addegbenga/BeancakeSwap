import { NextPage } from "next";
import Image from "next/image";

const Hero: NextPage = () => {
  return (
    <div className="bg-[#1a142a]">
      <div className="container flex flex-col items-center px-3 pt-20 pb-10">
        <Image color="red" src="/bunny.webp" width={240} height={240} />
        <div className="py-10">
          <h1 className="text-[#9a6aff] tracking-tighter  text-4xl font-bold">
            The moon is made up of beancakes and more.
          </h1>
          <p className="text-[#aea4c7] text-lg my-3  font-semibold">
            Trade, earn, and win crypto on the most popular decentralized
            paltform in the galaxy.
          </p>
          <div className="flex gap-3 my-5">
            <button className="bg-[#1fc7d4] rounded text-white text-lg px-4 border-2 border-[#1fc7d4] p-2">
              Get Started
            </button>
            <button className="border-[#1fc7d4] rounded text-[#1fc7d4] border-2 px-4 p-2">
              Trade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
