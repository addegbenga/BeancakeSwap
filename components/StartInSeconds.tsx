import { NextPage } from "next";

const StartInSeconds: NextPage = () => {
  return (
    <div className="bg-[#7141d4] lg:p-32 py-14">
      <h1 className="text-3xl lg:text-4xl text-white font-bold text-center">
        Start in seconds.
      </h1>
      <p className="text-center text-white px-4 text-base pt-4 pb-2">
        Connect your crypto wallet to start using the app in seconds.
      </p>
      <p className="text-center font-semibold text-white text-sm">
        No registration needed
      </p>

      <div className="my-4 flex   flex-col items-center">
        <button className="font-semibold text-sm text-[#1fc7d4] text-white">
          Learn how to start
        </button>
        <button className="font-semibold mt-4 lg:px-6 text-white rounded-md bg-[#1fc7d4] px-5 p-3 ">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default StartInSeconds;
