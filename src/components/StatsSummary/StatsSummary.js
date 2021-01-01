import TimeToGoMeasurement from 'components/TimeToGoMeasurement';
import CompletedMeasurement from 'components/CompletedMeasurement';
import { TIME_LEFT_DAYS, TIME_LEFT_WEEKS, TIME_LEFT_YEARS } from 'utils/time';

import './StatsSummary.css';

const StatsSummary = ({ distance, completeDistance, minor = false }) => {
  const remainingDistance = distance - completeDistance;
  const distancePerDay = remainingDistance / TIME_LEFT_DAYS;
  const distancePerWeek = remainingDistance / TIME_LEFT_WEEKS;
  const distancePerYear = remainingDistance / TIME_LEFT_YEARS;

  return (
    <section className={`stats-summary${minor ? ' stats-summary--minor' : ''}`}>
      <CompletedMeasurement
        completeDistance={completeDistance}
        distance={distance}
      />
      <TimeToGoMeasurement
        number={TIME_LEFT_DAYS}
        numberPer={distancePerDay}
        unit="day"
      />
      <TimeToGoMeasurement
        number={TIME_LEFT_WEEKS}
        numberPer={distancePerWeek}
        unit="week"
      />
      <TimeToGoMeasurement
        number={TIME_LEFT_YEARS}
        numberPer={distancePerYear}
        unit="year"
      />
    </section>
  );
};
export default StatsSummary;
