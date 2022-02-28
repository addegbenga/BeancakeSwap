import { NextPage } from "next";
import Image from "next/image";

const Hero: NextPage = () => {
  return (
    <>
      <div className="bg-[#1a142a]">
        <div className="container  justify-center  lg:mx-auto  flex flex-col-reverse  lg:flex-row  items-center px-3 pt-20 pb-10">
          <div className="py-10 lg:max-w-xl lg:mt-20">
            <h1 className="text-[#9a6aff] lg:text-6xl tracking-tighter lg:tracking-normal  text-4xl font-bold">
              The moon is made of pancakes.
            </h1>
            <p className="text-[#aea4c7] text-lg my-3  font-semibold">
              Trade, earn, and win crypto on the most popular decentralized
              paltform in the galaxy.
            </p>
            <div className="flex gap-3 my-5">
              <button className="bg-[#1fc7d4] rounded-lg text-white text-lg px-8 border-2 border-[#1fc7d4] p-2">
                Get Started
              </button>
              <button className="border-[#1fc7d4] rounded-lg text-[#1fc7d4] border-2 px-8 p-2">
                Trade Now
              </button>
            </div>
          </div>
          <div className=" w-52 lg:w-[35rem]">
            <Image
              color="red"
              src="/bunny.webp"
              width={240}
              height={240}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
