// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { Switch } from "@headlessui/react";
import Navbar from "../../components/Navbar";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineCaretDown } from "react-icons/ai";
import Footer from "../../components/Footer";
import MyCustomTable from "../../components/MyCustomTable";

const NftActivity: NextPage = () => {
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
        <div className="flex max-w-6xl lg:justify-center text-sm  lg:mx-auto py-2 mx-6 font-medium text-white gap-5">
          <Link href="/nft"> Overview</Link>
          <Link href="/nft/collections"> Collections</Link>
          <Link href="/nft/activity"> Activity</Link>
          {/* <h1 className="text-[#c1bed3]">Pools</h1> */}
        </div>
        <div className="bg-[#363559]">
          <div className=" max-w-6xl mx-auto lg:items-center lg:flex lg:justify-between lg:py-6 p-6 lg:p-0 py-7">
            <div>
              <h1 className="text-[#9a6aff]  text-4xl lg:text-6xl font-black mb-4">
                Activity
              </h1>
            </div>
          </div>
        </div>

        <div className=" pb-28 max-w-6xl mx-auto">
          {/* <Tableu /> */}
          <MyCustomTable />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NftActivity;
