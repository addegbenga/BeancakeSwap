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

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TradeSection />
      <Passive />
      <PriceSection />
      <Cake />
      <StartInSeconds />
      <Footer />
    </>
  );
};

export default Home;
