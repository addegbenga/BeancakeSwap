import { NextPage } from "next";
import Image from "next/image";

const Passive: NextPage = () => {
  return (
    <div className="bg-black bg-opacity-10">
      <div className="container px-6 pt-24">
        <div className="flex relative">
          <div className="absolute right-0  ">
            <Image src="/passive3.webp" width={200} height={200} />
          </div>
          <div className="absolute right-0">
            <Image src="/passive2.webp" width={200} height={200} />
          </div>
          <div className="absolute right-0">
            <Image src="/passive1.webp" width={200} height={200} />
          </div>
        </div>
        <div className="mt-56">
          <h1 className="text-3xl font-bold text-white text-opacity-80">
            <span className="text-[#9a6aff]">Earn</span> passive income with
            crypto
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
        <div>
          <h1 className="text-white py-6 text-2xl font-bold">
            Top <span className="text-[#9a6aff]">Farms</span>
          </h1>
          <div className=" grid grid-cols-2 ">
            <div className="mb-8">
              <h1 className="text-[#9a6aff] text-opacity-70 text-xs font-semibold ">
                BCOIN-BNB
              </h1>
              <p className="py-1 text-white">216.680%</p>
              <p className="text-white text-opacity-60">APR</p>
            </div>
            <div className="mb-8">
              <h1 className="text-[#9a6aff] text-opacity-70 text-xs font-semibold ">
                DPT-BNB LP
              </h1>
              <p className="py-1 text-white">216.680%</p>
              <p className="text-white text-opacity-60">APR</p>
            </div>{" "}
            <div className="mb-8">
              <h1 className="text-[#9a6aff] text-opacity-70 text-xs font-semibold ">
                GM-BNB LP
              </h1>
              <p className="py-1 text-white">216.680%</p>
              <p className="text-white text-opacity-60">APR</p>
            </div>
            <div className="mb-8">
              <h1 className="text-[#9a6aff] text-opacity-70 text-xs font-semibold ">
                GM-BNB LP
              </h1>
              <p className="py-1 text-white">216.680%</p>
              <p className="text-white text-opacity-60">APR</p>
            </div>{" "}
            <div className="mb-8">
              <h1 className="text-[#9a6aff] text-opacity-70 text-xs font-semibold ">
                GM-BNB LP
              </h1>
              <p className="py-1 text-white">216.680%</p>
              <p className="text-white text-opacity-60">APR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passive;
