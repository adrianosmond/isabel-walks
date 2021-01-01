import Measurement from 'components/Measurement';

import { pluralise, formatNumber } from 'utils/utils';

const TimeToGoMeasurement = ({ number, numberPer, unit }) => (
  <Measurement
    sections={[
      {
        number: formatNumber(number, 0),
        post: ` ${pluralise(unit, number)} to go`,
      },
      {
        pre: ' at',
        number: formatNumber(numberPer),
        post: `${pluralise('mile', numberPer)} per ${unit}`,
      },
    ]}
  />
);

export default TimeToGoMeasurement;
