import { NextPage } from "next";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
const MyTable: NextPage = () => {
  return (
    <table className="  w-full ">
      <tbody>
        <tr className="bg-[#27262c] ">
          <td className="py-7 px-6 ">
            <div className="flex items-center gap-1">
              <Image src="/bnbcake.svg" height={23} width={23} />
              <span className="font-semibold text-[#f4eeff]">CAKE-BNB</span>
            </div>
          </td>
          <td>
            <div className="flex flex-col">
              <h1 className="text-xs text-[#aea4c7]">Earned</h1>
              <span className="text-[#aea4c7]">0</span>
            </div>
          </td>
          <td>
            <h1 className="text-xs text-[#aea4c7]">APR</h1>
            <div className="flex gap-1">
              <h1 className="text-[#f4eeff]">32.16%</h1>
              <Image src="/calc.svg" height={20} width={20} />
            </div>
          </td>
          <td>
            <h1 className="text-xs text-[#aea4c7]">Liquidity</h1>

            <div className="flex gap-1">
              <h1 className="text-[#f4eeff]"> $211,035,969</h1>
              <Image src="/question.svg" height={23} width={23} />
            </div>
          </td>
          <td>
            <h1 className="text-xs text-[#aea4c7]">Multiplier</h1>
            <div className="flex gap-1">
              <h1 className="text-[#f4eeff]"> 40x</h1>
              <Image src="/question.svg" height={23} width={23} />
            </div>
          </td>
          <td className="px-2">
            <div>
              {" "}
              <MdKeyboardArrowUp size={20} color="#1fc7d4" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;
