import { NextPage } from "next";
import Image from "next/image";
import { IoPeopleOutline } from "react-icons/io5";
import { BiMaleSign, BiBarChartAlt } from "react-icons/bi";
const TrustedBy: NextPage = () => {
  return (
    <div className="bg-[#1a142a] px-5 bg-black lg:pt-32">
      <div className="container py-12 lg:flex flex-col justify-center  mx-auto   ">
        <div className="flex justify-center items-center flex-col">
          <div className="">
            <Image src="/trusted.svg" width={50} height={50} />
          </div>

          <h1 className="text-3xl text-white  my-3 mt-5 font-bold text-center">
            Used by millions. <br />
            Trusted with billions.
          </h1>
          <p className="text-center lg:max-w-xl my-2 text-[#aea4c7] ">
            PancakeSwap has the most users of any decentralized platform, ever.
            And those users are now entrusting the platform with over $12
            billion in funds.
          </p>
          <span className="text-[#aea4c7] font-bold my-3">
            Will you join them?
          </span>
        </div>
        <div className="my-3  flex lg:grid grid-cols-3 lg:max-w-6xl lg:mx-auto  flex-col gap-4">
          <div className="bg-[#27262c] border-opacity-20 lg:border border-[#aea4c7] p-4 mx-6 lg:pr-32 lg:pl-4 lg:mx-0 lg:relative rounded-2xl ">
            <div className="flex lg:mt-24 justify-between  items-start">
              <h1 className="text-3xl  text-white font-bold">
                3.1 million <br />{" "}
                <span className="text-[#9a6aff] ">users</span>
              </h1>
              <IoPeopleOutline className="text-[#9a6aff] lg:absolute top-5 right-5 text-4xl " />
            </div>
            <p className=" text-[#aea4c7] py-4">in the last 30 days</p>
          </div>
          <div className="bg-[#27262c] lg:border border-opacity-20 border-[#aea4c7] lg:relative p-4 mx-6 lg:mx-0 rounded-2xl">
            <div className="flex lg:mt-24 justify-between items-start">
              <h1 className="text-3xl text-white font-bold">
                5.1 million <br />{" "}
                <span className="text-[#1fc7d4] ">trades</span>
              </h1>
              <BiMaleSign className="text-[#1fc7d4] lg:absolute top-5 right-5 text-4xl" />
            </div>
            <p className=" text-[#aea4c7] py-4">in the last 30 days</p>
          </div>{" "}
          <div className="bg-[#27262c] border-opacity-20 lg:border border-[#aea4c7] lg:relative p-4 mx-6 lg:mx-0 rounded-2xl">
            <div className="flex lg:mt-24 justify-between items-start">
              <h1 className="text-3xl text-white font-bold">
                $12 billion <br />{" "}
                <span className="text-[#ed4b9e] ">staked</span>
              </h1>
              <BiBarChartAlt className="text-[#ed4b9e] lg:absolute top-5 right-5 text-4xl" />
            </div>
            <p className=" text-[#aea4c7] py-4">in the last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
