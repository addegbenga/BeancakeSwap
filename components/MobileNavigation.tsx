import { NextPage } from "next";
import { AiOutlineEllipsis } from "react-icons/ai";
import Image from "next/image";
const MobileNavigation: NextPage = () => {
  return (
    <div className="bg-[#27262c] border-t border-gray-100 border-opacity-10 z-50 fixed md:hidden w-full bottom-0">
      <div className="py-3 flex items-center justify-between px-8">
        <div className="flex-col text-[#aea4c7] flex items-center">
          <Image src="/trade.svg" width={17} height={17} />
          <h1 className="text-[0.6rem]">Trade</h1>
        </div>
        <div className="flex-col text-[#aea4c7] flex items-center">
          <Image src="/earn.svg" width={17} height={17} />
          <h1 className="text-[0.6rem]">Earn</h1>
        </div>
        <div className="flex-col text-[#aea4c7] flex items-center">
          <Image src="/win.svg" width={17} height={17} />
          <h1 className="text-[0.6rem]">Win</h1>
        </div>
        <div className="flex-col text-[#aea4c7] flex items-center">
          <Image src="/nft.svg" width={17} height={17} />
          <h1 className="text-[0.6rem]">NFT</h1>
        </div>
        <div className="flex-col text-[#aea4c7] flex items-center">
          <AiOutlineEllipsis size={30} className="text-[#aea4c7]" />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
