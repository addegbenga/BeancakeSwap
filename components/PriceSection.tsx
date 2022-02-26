import { NextPage } from "next";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const PriceSection: NextPage = () => {
  return (
    <div className="bg-[#0b4270] pt-14 pb-14">
      <div className="bg-[#091c2f] lg:rounded-[4rem] lg:border border-opacity-30 border-gray-100 lg:max-w-4xl lg:mx-auto mx-4  pt-10 pb-10 rounded-2xl">
        <h1 className="text-3xl text-center text-white font-bold">
          <span className="text-[#9a6aff] ">Win </span>millions in prizes
        </h1>
        <p className="text-white text-opacity-80 text-center my-4">
          Provably fair, on-chain games.
          <br />
          Win big with PancakeSwap.
        </p>
        <div>
          <div className="py-6 lg:max-w-xl lg:mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 gap-10">
            <div className="bg-[#ffb439] origin-top-left -rotate-3 mx-6 lg:mx-0 p-6 py-8 rounded-3xl ">
              <div className="flex justify-end pb-6">
                <Image src="/price1.svg" width={30} height={30} />
              </div>
              <h2 className="text-sm font-bold">Prediction</h2>
              <h1 className="text-3xl py-2 font-bold">$500 million</h1>
              <h3 className="font-bold">in BNB won so far</h3>
              <p className="py-5 text-sm font-medium">
                Will BNB price rise or fall? <br /> Guess correctly to win!
              </p>

              <button className="bg-[#1fc7d4] flex items-center gap-2 justify-center  rounded-md w-full font-semibold mt-4 p-3">
                Play
                <AiOutlineArrowRight />
              </button>
            </div>
            <div className="bg-[#7141d4] origin-top-right rotate-3 mx-6 lg:mx-0 p-6 py-8 rounded-3xl ">
              <div className="flex justify-end pb-6">
                <Image src="/lottery.svg" width={30} height={30} />
              </div>

              <h2 className="text-sm font-bold text-white">Lottery</h2>
              <h1 className="text-3xl py-2 text-[#ffb439] font-bold">
                $175,297
              </h1>
              <h3 className="font-bold text-white">
                in CAKE prizes this round
              </h3>
              <p className="py-5 text-white text-sm font-medium">
                Buy tickets with CAKE, win CAKE if your numbers match <br />{" "}
              </p>
              <button className="bg-[#1fc7d4] flex items-center gap-2 justify-center  rounded-md w-full font-semibold mt-4 p-3">
                Buy Tickets
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
