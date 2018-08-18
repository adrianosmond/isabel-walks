import React from 'react';

import BackHomeLink from 'components/BackHomeLink';
import PageHeading from 'components/PageHeading';
import Map from 'components/Map';

const AllRoutesMap = () =>
  <div>
    <BackHomeLink />
    <PageHeading title="Trail map" />
    <Map />
  </div>;

export default AllRoutesMap;
