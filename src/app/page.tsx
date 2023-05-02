import HeaderIndex from "./components/header/HeaderIndex";

import BodyIndex from "./components/body/BodyIndex";
import ButtonIndex from "./components/buttons/ButtonIndex";

import WomanHome from "./components/bodyImage/WomanHome";

import HighPerIndex from "./components/layers/highperformance/HighPerIndex";
import HighTaxIndex from "./components/layers/hightax/HighTaxIndex";
import PerformanceIndex from "./components/layers/performance/PerformanceIndex";
import IntegrationIndex from "./components/layers/integration/IntegrationIndex";

function Home() {
  return (
    <main>
      <HeaderIndex />
      <div className="w-full flex flex-row justify-between items-center px-40 pt-16">
        <div className="w-1/2 space-y-20">
          <BodyIndex />
          <ButtonIndex />
        </div>
        <WomanHome />
      </div>
      <div className="w-full flex flex-row justify-between items-center px-40 pt-20 md:space-x-12 lg:space-x-24">
        <HighTaxIndex />
        <PerformanceIndex />
        <IntegrationIndex />
        <HighPerIndex />
      </div>
    </main>
  );
}

export default Home;
