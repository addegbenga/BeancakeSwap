import { darkTheme, SwapWidget } from "@uniswap/widgets";
import { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";
import "@uniswap/widgets/fonts.css";
const jsonRpcEndpoint =
  "https://ropsten.infura.io/v3/209f2acd12054d99b32ca59bedda84e0";
// Default token list from Uniswap

// Use the native token of the connected chain as the default input token
const NATIVE = "NATIVE"; // Special address for native token

// WBTC as the default output token
const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

const CMC_TOKEN_LIST =
  "https://api.coinmarketcap.com/data-api/v3/uniswap/all.json";
const Uniswap: NextPage = () => {
  const web3reactContext = useWeb3React();

  return (
    <div className="Uniswap flex justify-center ">
      <SwapWidget
        provider={web3reactContext.library}
        jsonRpcEndpoint={jsonRpcEndpoint && jsonRpcEndpoint}
        defaultTokenList={CMC_TOKEN_LIST}
        defaultInputTokenAddress={NATIVE}
        defaultOutputTokenAddress={WBTC}
        theme={darkTheme}
        // Custom width in pixels
      />
    </div>
  );
};

export default Uniswap;
