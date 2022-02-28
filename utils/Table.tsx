import { NextPage } from "next";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
const MyTable: NextPage = () => {
  return (
    <div className="">
      <div className="flex bg-[#27262c] p-4 items-center  justify-between">
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
        <div>
          <h1 className="text-xs text-[#aea4c7]">Liquidity</h1>

          <div className="flex gap-1">
            <h1 className="text-[#f4eeff]"> $211,035,969</h1>
            <Image src="/question.svg" height={23} width={23} />
          </div>
        </div>
        <div>
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
      <div className="flex gap-10  py-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex  gap-1">
            <h1 className=" text-[#1fc7d4]">Get CAKE-BNB LP </h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <div className="flex gap-1">
            <h1 className=" text-[#1fc7d4]">View Contract</h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <div className="flex gap-1">
            <h1 className="text-[#1fc7d4]">See Pair Info</h1>
            <Image src="/arr.svg" width={22} height={22} />
          </div>
          <button
            // style={{ border: "2px solid #9a6aff" }}
            className="flex gap-2 w-15 border  my-2 p-0.5 px-2 rounded-2xl   items-center "
          >
            <Image src="/core.svg" height={15} width={15} />
            <span className="text-[#9a6aff] text-sm">Core</span>
          </button>
        </div>

        <div className="text-white border border-[#1fc7d4] flex w-full ">
          <div>
            <h1>CAKE EARNED</h1>
            <h2>0</h2>
          </div>
          <button>Harvest</button>
        </div>

        <div
          style={{ background: "red" }}
          className=" text-white bg-green-100 w-full"
        >
          <h1>START FARMING</h1>
          <button>Harvest</button>
        </div>
      </div>
      <button className="bg-red-100 text-white">hello</button>
    </div>
  );
};

export default MyTable;
