import React from 'react';
import Measurement from 'components/Measurement';
import { formatNumber } from 'utils/utils';

const CompletedMeasurement = ({ completeDistance, distance }) =>
  <Measurement sections={[
    { pre: 'You have completed', number: formatNumber(completeDistance) },
    { pre: 'out of', number: formatNumber(distance), post: 'miles' }]} />;

export default CompletedMeasurement;
