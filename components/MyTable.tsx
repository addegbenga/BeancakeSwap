import { NextPage } from "next";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
const MyTable: NextPage = () => {
  return (
    <div className=" mx-4 md:mx-0">
      <div className="flex bg-[#27262c] rounded-t-2xl p-5 items-center  justify-between">
        <div className="flex items-center gap-1">
          <Image src="/bnbcake.svg" height={23} width={23} />
          <span className="font-semibold text-[#f4eeff]">CAKE-BNB</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xs text-[#aea4c7]">Earned</h1>
          <span className="text-[#aea4c7]">0</span>{" "}
        </div>
        <div>
          <h1 className="text-xs text-[#aea4c7]">APR</h1>
          <div className="flex gap-1">
            <h1 className="text-[#f4eeff]">32.16%</h1>
            <Image src="/calc.svg" height={20} width={20} />
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="text-xs text-[#aea4c7]">Liquidity</h1>

          <div className="flex gap-1">
            <h1 className="text-[#f4eeff]"> $211,035,969</h1>
            <Image src="/question.svg" height={23} width={23} />
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="text-xs text-[#aea4c7]">Multiplier</h1>
          <div className="flex gap-1">
            <h1 className="text-[#f4eeff]"> 40x</h1>
            <Image src="/question.svg" height={23} width={23} />
          </div>
        </div>
        <div>
          {" "}
          <MdKeyboardArrowUp size={20} color="#1fc7d4" />
        </div>
      </div>
      <div className="md:gap-10  flex flex-col-reverse md:flex-row  py-4">
        <div className="flex w-full md:w-2/6 flex-col gap-1 ">
          <div className="flex  gap-1">
            <h1 className=" text-[#1fc7d4] text-sm">Get CAKE-BNB LP </h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <div className="flex gap-1">
            <h1 className=" text-[#1fc7d4] text-sm">View Contract</h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <div className="flex gap-1">
            <h1 className="text-[#1fc7d4] text-sm">See Pair Info</h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <button
            // style={{ border: "2px solid #9a6aff" }}
            className="flex gap-2 border-[#9a6aff] w-20 border  my-1 p-0.5 px-2 rounded-2xl   items-center "
          >
            <Image src="/core.svg" height={15} width={15} />
            <span className="text-[#9a6aff] text-sm">Core</span>
          </button>
        </div>

        <div className="text-white my-4 border-2 w-full md:w-9/12 rounded-xl h-24 justify-center border-[#372f47] p-3 flex flex-col  ">
          <h1 className="text-xs font-semibold">
            <span className="text-[#9a6aff]">CAKE</span> EARNED
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="font-bold">0</h2>
            <button className="bg-[#372f47] text-white text-opacity-60 rounded-xl  p-2 px-5  ">
              Harvest
            </button>
          </div>
        </div>

        <div className=" text-white border-2 w-full gap-2 md:w-9/12 rounded-xl h-24 flex flex-col justify-center  border-[#372f47] p-3   ">
          <h1 className="text-xs font-semibold text-[#aea4c7]">
            START FARMING
          </h1>
          <button className="bg-[#1fc7d4]  p-2 px-5 rounded-xl">Harvest</button>
        </div>
      </div>
    </div>
  );
};

export default MyTable;
