import Link from "next/link";
import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MyCustomTable from "../../components/MyCustomTable";

const NftActivity: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#08060b]">
        <div className="flex bg-[#1d1d22] lg:justify-center text-sm  lg:mx-auto py-4 px-6 lg:px-0 font-medium text-white gap-5">
          <Link href="/nft"> Overview</Link>
          <Link href="/nft/collections"> Collections</Link>
          <Link href="/nft/activity"> Activity</Link>
          {/* <h1 className="text-[#c1bed3]">Pools</h1> */}
        </div>
        <div className="bg-[#363559]">
          <div className=" max-w-6xl  px-3 lg:px-0 mx-auto lg:items-center lg:flex lg:justify-between lg:py-12 p-6 lg:p-0 py-8">
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
