import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import TradeSection from "../components/TradeSection";
import Passive from "../components/Passive";
import PriceSection from "../components/PriceSection";
import Cake from "../components/Cake";
import StartInSeconds from "../components/StartInSeconds";
import MobileNavigation from "../components/MobileNavigation";

const Home: NextPage = () => {
  return (
    <>
      {/* <Uniswap /> */}
      <Navbar />
      <Hero />
      <TrustedBy />
      <TradeSection />
      <Passive />
      <PriceSection />
      <Cake />
      <StartInSeconds />
      <MobileNavigation />
      <Footer />
    </>
  );
};

export default Home;
