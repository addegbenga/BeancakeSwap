import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  AiOutlineTwitter,
  AiOutlineArrowRight,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { FaTelegram, FaGithub, FaDiscord } from "react-icons/fa";

const Footer: NextPage = () => {
  function MyToggle() {
    const [enabled, setEnabled] = useState(false);

    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-[#666171]" : "bg-gray-200"
        } relative inline-flex items-center h-8 rounded-full w-14`}
      >
        <HiOutlineSun size={22} className="absolute left-1 " />
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-7" : "translate-x-0"
          } flex items-center bg-[#27262c] border-[#9a6aff] justify-center w-8 h-8 transform border-2  rounded-full`}
        >
          <FiMoon size={22} className="text-[#9a6aff]" />
        </span>
      </Switch>
    );
  }

  return (
    <div className="bg-[#27262c] px-4 py-10 lg:pt-20 lg:py-0">
      <div className="lg:max-w-6xl lg:mx-auto">
        <div className="flex flex-col lg:flex-row-reverse justify-between  lg:gap-9 gap-4 ">
          <ul className="border-b lg:border-0 border-opacity-20 border-white pb-4">
            <button className="font-semibold lg:text-xl  flex items-center gap-2 text-white">
              <Image src="/logo.svg" height={20} width={20} />
              PancakeSwap
            </button>
            {/* <li className="font-semibold text-white">PancakeSwap</li> */}
          </ul>
          {/* dynamci section */}
          <div className="lg:hidden flex gap-6 flex-col-reverse justify-between  ">
            <div className="flex gap-5 border-b pb-8 border-white border-opacity-30 items-center">
              <MyToggle />
              <div className="flex text-[#aea4c7] items-center gap-3">
                <BsGlobe size={22} />
                <span>EN</span>
              </div>
            </div>
            <div className="flex gap-4 justify-between  items-center">
              <div className="flex gap-2 items-center">
                <div className=" bg-[#1fc7d4] flex items-center p-1 rounded-full">
                  <Image src="/logo.svg" height={20} width={20} />
                </div>

                <p className="text-[#aea4c7]">$6.506</p>
              </div>
              <button className="bg-[#1fc7d4] flex items-center gap-2 p-1.5 px-4 rounded-full text-white">
                Buy Cake
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <ul className="flex flex-col gap-2 pt-4 lg:pt-0 lg:gap-4">
            <li className="font-semibold lg:text-base text-sm text-[#9a6aff] ">
              ABOUT
            </li>
            <li className="font-medium text-sm  text-white">Contact</li>
            <li className="font-medium text-sm lg:text-base text-white">
              Brand
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Community
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              CAKE Token
            </li>
          </ul>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li className="font-semibold text-sm lg:text-base text-[#9a6aff] ">
              HELP
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Customer Support
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Troubleshooting
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Guides
            </li>
          </ul>{" "}
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li className="font-semibold text-sm lg:text-base text-[#9a6aff] ">
              DEVELOPERS
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Github
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Documentation
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Bug Bounty
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Audits
            </li>
            <li className="font-medium text-sm lg:text-base text-white">
              Careers
            </li>
          </ul>{" "}
        </div>
        <ul className="mt-14 flex lg:border-b lg:pb-8 border-opacity-10 border-white gap-6">
          <li>
            <AiOutlineTwitter color="#aea4c7" size={26} />
          </li>
          <li>
            <FaTelegram size={26} color="#aea4c7" />
          </li>{" "}
          <li>
            <AiOutlineInstagram color="#aea4c7" size={26} />
          </li>{" "}
          <li>
            <FaGithub color="#aea4c7" size={26} />
          </li>{" "}
          <li>
            <FaDiscord color="#aea4c7" size={26} />
          </li>
        </ul>

        {/* dynamci section */}
        <div className="lg:flex hidden  justify-between py-10 ">
          <div className="flex gap-5 items-center">
            <MyToggle />
            <div className="flex text-[#aea4c7] items-center gap-3">
              <BsGlobe size={22} />
              <span>EN</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <div className=" bg-[#1fc7d4] flex items-center p-1 rounded-full">
                <Image src="/logo.svg" height={20} width={20} />
              </div>

              <p className="text-[#aea4c7]">$6.506</p>
            </div>
            <button className="bg-[#1fc7d4] flex items-center gap-2 p-1.5 px-4 rounded-full text-white">
              Buy Cake
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
