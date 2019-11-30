import React from 'react';
import { Link } from 'react-router-dom';

import './BackHomeLink.css';

const BackHomeLink = () => (
  <div className="row back-link-section">
    <Link to="/" className="back-link">
      Back to all trails
    </Link>
  </div>
);

export default BackHomeLink;
