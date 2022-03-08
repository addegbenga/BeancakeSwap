import { NextPage } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Uniswap from "../../components/UniSwap";

const Trade: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#393057] overflow-x-hidden">
        <div className="flex bg-[#1d1d22] lg:justify-center text-base  lg:mx-auto py-4 px-6 lg:px-0 font-medium text-[#aea4c7] gap-5">
          <Link href="/trade"> Exchange</Link>
          <Link href="/nft/collections"> Transfer</Link>
          {/* <h1 className="text-[#c1bed3]">Pools</h1> */}
        </div>
        <div className="py-10 pb-32">
          <Uniswap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trade;
