import { NextPage } from "next";
import Image from "next/image";
// import { MdKeyboardArrowUp } from "react-icons/md";
const MyCustomTable: NextPage = () => {
  return (
    <div className="bg-[#27262c]  border border-gray-300 border-opacity-10 p-8 pb-28 mt-14 rounded-2xl">
      <div className="flex  flex-col md:flex-row gap-3  w-full items-center ">
        {/* <th className="text-[#c1bed3] text-xs">Filter by</th> */}
        <div className="   w-full gap-3">
          <h1 className="text-[#c1bed3] text-sm "> Filter by</h1>
          <div className="flex text-[#c1bed3] gap-3 my-3  overflow-x-scroll">
            <button className="bg-[#372f47] text-sm font-semibold rounded-full px-3 md:py-1">
              Collections
            </button>
            <button className="bg-[#372f47] text-sm font-semibold rounded-full px-5 py-1 md:py-1">
              Listed
            </button>
            <button className="bg-[#372f47] text-sm font-semibold  rounded-full px-5 md:py-1">
              Delisted
            </button>
            <button className="bg-[#372f47] text-sm font-semibold  rounded-full px-5 md:py-1">
              Modified
            </button>
            <button className="bg-[#372f47] text-sm font-semibold  rounded-full px-5  md:py-1">
              Sold
            </button>
          </div>
        </div>
        <button className="text-white bg-[#1fc7d4] px-5 w-full md:w-32 rounded-full py-1.5">
          Refresh
        </button>
      </div>
      <div className=" w-full overflow-x-scroll">
        <table className=" table-auto w-full ">
          <thead>
            <tr className="border-b border-[#c1bed3] border-opacity-10  ">
              <th className="text-left text-xs text-[#9a6aff] py-5 ">Item</th>
              <th className="text-left text-xs text-[#9a6aff] px-10">EVENT</th>
              <th className="  text-left px-10 text-[#9a6aff] text-xs">
                PRICE
              </th>
              <th className="text-left text-[#9a6aff] text-xs ">FROM</th>
              <th className=" text-left text-[#9a6aff] px-10  text-xs">TO</th>
              <th className="pr-22 text-[#9a6aff] text-xs">DATE</th>
            </tr>
          </thead>

          {[1, 2, 3, 4, 5, 6].fill(1, 2, 3).map((item, idx) => (
            <tbody key={idx}>
              <tr className="border-b border-[#c1bed3] border-opacity-10 ">
                <td className="flex gap-2 py-6  items-center">
                  <div className="w-[6rem] h-[6rem] md:w-14 h-14">
                    <Image
                      className="rounded-xl"
                      src="/gamestar.png"
                      layout="responsive"
                      height={60}
                      width={60}
                    />
                  </div>

                  <div>
                    <h1 className="text-xs text-[#c1bed3]">Pancake Bunnies</h1>
                    <h1 className="text-sm text-white">
                      Pancake Christmas 2021
                    </h1>
                  </div>
                </td>
                <td className="px-10 text-[#c1bed3] text-xs ">Listed</td>
                <td>
                  <div className="flex flex-col px-10  ">
                    <div className="flex text-xs  text-white gap-1">
                      <Image src="/bnbs.svg" width={14} height={14} />
                      244
                    </div>
                    <h1 className="text-xs   text-[#c1bed3]">$101,714.71</h1>
                  </div>
                </td>
                <td className="text-white text-xs ">0xcc...776d</td>
                <td className="px-12 text-white">-</td>
                <td className="text-white text-xs ">3/1/2022 12:58 AM</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyCustomTable;
