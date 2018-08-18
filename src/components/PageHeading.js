import React from 'react';

import './PageHeading.css';

const PageHeading = ({ title }) =>
  <section>
    <div className="row">
      <h2 className="page-heading">{title}</h2>
    </div>
  </section>;

export default PageHeading;
