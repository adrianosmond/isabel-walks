import StatsSummary from 'components/StatsSummary';
import TrailGrid from 'components/TrailGrid';

import { totalData } from 'utils/data';

const Home = () => (
  <main>
    <StatsSummary
      completeDistance={totalData.totalComplete}
      distance={totalData.total}
    />
    <TrailGrid />
  </main>
);

export default Home;
