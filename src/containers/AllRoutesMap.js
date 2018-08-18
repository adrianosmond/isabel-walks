import React from 'react';

import BackHomeLink from 'components/BackHomeLink';
import PageHeading from 'components/PageHeading';
import Map from 'components/Map';

import { flattenDeep } from 'utils/utils';

import trails from 'data/trails.json';

const flattenedTrails = flattenDeep(Object.keys(trails)
  .map(key =>
    trails[key].segments
      .map((s, idx) => ({
        url: `${process.env.PUBLIC_URL}/geoJson/${key}-seg-${idx}.json`,
        complete: s.complete,
      }))));

const AllRoutesMap = () =>
  <div>
    <BackHomeLink />
    <PageHeading title="Trail map" />
    <Map segments={flattenedTrails} />
  </div>;

export default AllRoutesMap;
