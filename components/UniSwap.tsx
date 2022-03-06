import { SwapWidget } from "@uniswap/widgets";
import ethers from "ethers";
import "@uniswap/widgets/fonts.css";
const jsonRpcEndpoint =
  "https://ropsten.infura.io/v3/209f2acd12054d99b32ca59bedda84e0";
const Uniswap = () => {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  <div className="Uniswap">
    <SwapWidget provider={provider} jsonRpcEndpoint={jsonRpcEndpoint} />
  </div>;
};

export default Uniswap;
