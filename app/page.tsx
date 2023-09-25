import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

//Goeli testnet chainId
const supportedChainId = [5];
const connectors = {
  injected: {},
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
{
  /*Need to add this but not sure where, here i have error
   <ThirdwebWeb3Provider
supportedChainId={supportedChainId}
connectors={connectors}>
</ThirdwebWeb3Provider> */
}
