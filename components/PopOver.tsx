import { NextPage } from "next";

type props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const PopOver: NextPage<props> = ({ isOpen, setIsOpen }) => {
  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    isOpen && (
      <div className="absolute rounded-lg top-10 z-40 right-0 bg-[#27262c]">
        <div className="text-left divide-y divide-gray-100/10  text-[#aea4c7] text-sm grid grid-cols-1  border rounded-lg w-72 border-gray-100 border-opacity-10 ">
          <div className="flex py-3 pt-5 px-4  justify-between">
            <h1>Wallets</h1>
            <span>X</span>
          </div>

          <h1 className="py-4 px-4 ">Recent Transactions</h1>
          <h1 className="py-4 px-4 ">Your NFT's</h1>
          <h1 className="py-4 px-4 ">Make a Profile</h1>
          <h1 className="py-4 px-4 ">Disconnect</h1>
        </div>
      </div>
    )
  );
};

export default PopOver;
