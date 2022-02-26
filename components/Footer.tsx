import { NextPage } from "next";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div className="bg-[#27262c] px-4 py-10">
      <div className="flex flex-col lg:flex-row-reverse justify-between lg:max-w-6xl lg:mx-auto gap-9 ">
        <ul className="border-b border-opacity-20 border-white pb-4">
          <button className="font-semibold  flex items-center gap-2 text-white">
            <Image src="/logo.svg" height={20} width={20} />
            PancakeSwap
          </button>
          {/* <li className="font-semibold text-white">PancakeSwap</li> */}
        </ul>
        <ul className="flex flex-col gap-2 lg:gap-4">
          <li className="font-semibold text-sm text-[#9a6aff] ">ABOUT</li>
          <li className="font-medium text-sm text-white">Contact</li>
          <li className="font-medium text-sm text-white">Brand</li>
          <li className="font-medium text-sm text-white">Community</li>
          <li className="font-medium text-sm text-white">CAKE Token</li>
        </ul>
        <ul className="flex flex-col gap-2 lg:gap-4">
          <li className="font-semibold text-sm text-[#9a6aff] ">HELP</li>
          <li className="font-medium text-sm text-white">Customer Support</li>
          <li className="font-medium text-sm text-white">Troubleshooting</li>
          <li className="font-medium text-sm text-white">Guides</li>
        </ul>{" "}
        <ul className="flex flex-col gap-2 lg:gap-4">
          <li className="font-semibold text-sm text-[#9a6aff] ">DEVELOPERS</li>
          <li className="font-medium text-sm text-white">Github</li>
          <li className="font-medium text-sm text-white">Documentation</li>
          <li className="font-medium text-sm text-white">Bug Bounty</li>
          <li className="font-medium text-sm text-white">Audits</li>
          <li className="font-medium text-sm text-white">Careers</li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Footer;
