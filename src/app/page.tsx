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
      <div className="w-full flex flex-row justify-between items-center px-20 pt-16">
        <div className="w-auto space-y-20">
          <BodyIndex />
          <ButtonIndex />
        </div>
        <WomanHome />
      </div>
      <div className="w-full grid gap-8 2xl:grid-cols-4 lg:grid-cols-2 justify-between items-center px-32 pt-20">
        <HighTaxIndex />
        <PerformanceIndex />
        <IntegrationIndex />
        <HighPerIndex />
      </div>
    </main>
  );
}

export default Home;
