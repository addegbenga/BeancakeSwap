// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import { NextPage } from "next";
import { Switch } from "@headlessui/react";
import Tableu from "../../components/MyTable";
import Navbar from "../../components/Navbar";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineCaretDown } from "react-icons/ai";

const Earn: NextPage = () => {
  const [drop, setDrop] = useState<boolean>(false);

  const handleDropDown = () => {
    setDrop(!drop);
  };
  function MyToggle() {
    const [enabled, setEnabled] = React.useState(false);
    // eslint-disable-next-line no-undef

    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-[#666171]" : "bg-[#372f47]"
        } relative inline-flex items-center h-5 rounded-full w-10`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-5" : "translate-x-0"
          } flex items-center bg-[#27262c] border-[#9a6aff] justify-center w-5 h-5 transform border-2  rounded-full`}
        ></span>
      </Switch>
    );
  }
  function MyLiveToggle() {
    const [enabled, setEnabled] = React.useState(true);

    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-[#372f47]" : " bg-[#372f47]  rounded-full"
        } relative inline-flex items-center h-7  rounded-full w-32`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "text-[#c1bed3]" : " text-[#372f47] bg-[#b8add2]"
          } absolute text-white font-semibold  rounded-full flex justify-end px-2  right-0 `}
        >
          Finished
        </span>

        <span
          className={`${
            enabled ? " text-[#372f47] bg-[#b8add2]" : "text-[#c1bed3]"
          } flex items-center font-semibold  justify-center w-12 h-7 transform rounded-full `}
        >
          Live
        </span>
      </Switch>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#08060b]">
        <div className="flex max-w-6xl lg:justify-center lg:mx-auto py-2 mx-6 font-semibold text-white gap-3">
          <h1 className="text-[#c1bed3]">Farms</h1>
          <h1 className="text-[#c1bed3]">Pools</h1>
        </div>
        <div className="bg-[#363559]">
          <div className=" max-w-6xl mx-auto lg:items-center lg:flex lg:justify-between lg:py-6 p-6 lg:p-0 py-7">
            <div>
              <h1 className="text-[#9a6aff]  text-4xl lg:text-6xl font-black mb-4">
                Syrup Pools
              </h1>
              <p className=" text-[#f4eeff] lg:text-lg font-semibold">
                Just stake some tokens to earn.
              </p>
              <p className="text-[#f4eeff] lg:text-lg lg:-mt-1 font-semibold">
                High APR, low risk.
              </p>
            </div>
            <div className="flex  lg:w-1/3 items-center gap-5 my-4 ">
              <button className="bg-[#b8add2] rounded-md p-2 px-3">
                Help?
              </button>
              <div className="bg-[#27262c] w-full rounded-2xl p-4 px-6 text-white">
                <h1 className="text-sm text-[#c1bed3] font-semibold my-3">
                  Auto CAKE Bounty ?
                </h1>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-bold text-[#c1bed3]">0.058</h1>
                    <span className="text-xs text-[#c1bed3]">0.02 USD</span>
                  </div>
                  <button className="bg-[#1fc7d4] px-3 p-1 rounded ">
                    Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl lg:flex lg:justify-between lg:items-center lg:mt-10 mx-auto">
          <div className="my-8 mx-4 flex  items-center gap-4">
            <BsFillGrid3X2GapFill className="text-white" />
            <AiOutlineBars className="text-white" />
            <div className="flex gap-2">
              <MyToggle />
              <span className="text-sm text-[#c1bed3]">Staked only</span>
            </div>
            <div className="flex gap-2">
              <MyLiveToggle />
            </div>
          </div>
          <div className="flex   mx-4 gap-3 ">
            <div className="w-64 ">
              <h1 className="text-[#c1bed3] lg:text-sm">Sort by</h1>
              <div className="relative ">
                <div
                  className={` ${
                    drop
                      ? " rounded-t-2xl "
                      : "rounded-2xl transition-all  delay-100 ease-in-out"
                  }  bg-[#372f47]  text-[#f4eeff]  flex p-2 justify-between`}
                >
                  <h1 className="text-[#c1bed3]">Hot</h1>
                  <button onClick={handleDropDown}>
                    <AiOutlineCaretDown />
                  </button>
                </div>
                <ul
                  className={`${
                    drop
                      ? " transition-all h-52  ease-in-out  duration-300 "
                      : ""
                  }  bg-[#372f47] rounded-b-2xl font-medium gap-3 text-[#f4eeff]  flex flex-col h-0 px-2  absolute w-full   overflow-y-hidden  transition-all ease-in-out  `}
                >
                  <li className="mt-4">APR</li>
                  <li>Multiplier</li>
                  <li>Earned</li>
                  <li>Liquidity</li>
                  <li>Latest</li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-[#c1bed3] lg:text-sm">Search</h1>
              <input
                className="p-2 text-white w-full rounded-2xl bg-[#372f47]"
                type="search"
                placeholder="Search Farms"
              />
            </div>
          </div>
        </div>

        <div className="my-2 max-w-6xl mx-auto">
          <Tableu />
        </div>
      </div>
    </>
  );
};

export default Earn;
