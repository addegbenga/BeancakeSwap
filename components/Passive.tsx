import { NextPage } from "next";
import Image from "next/image";

const Passive: NextPage = () => {
  return (
    <div className="bg-black bg-opacity-10">
      <div className="container lg:max-w-4xl  lg:mx-auto lg:px-0 px-6 pt-24 pb-20 lg:pb-44">
        <div className=" flex justify-between relative ">
          <div className="flex    ">
            <div className="absolute w-60 right-0 lg:left-0 lg:w-[28rem]  ">
              <Image
                src="/passive3.webp"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute w-60 right-0 lg:left-0 lg:w-[28rem] ">
              <Image
                src="/passive2.webp"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute w-60 right-0 lg:left-0 lg:w-[28rem] ">
              <Image
                src="/passive1.webp"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="mt-56 lg:mt-20 lg:absolute lg:max-w-md right-0 lg:pt-10">
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
        </div>
        <div className="lg:mt-[28rem]">
          <h1 className="text-white py-6 text-2xl font-bold">
            Top <span className="text-[#9a6aff]">Farms</span>
          </h1>
          <div className=" grid grid-cols-2 lg:grid-cols-5 ">
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
