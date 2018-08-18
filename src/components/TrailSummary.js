import React from 'react';

import './TrailSummary.css';

const TrailSummary = ({ trail }) =>
  <section className="row">
    <table className="trail-summary">
      <thead className="trail-summary__heading">
        <tr className="trail-summary__row trail-summary__row--header">
          <td className="trail-summary__cell trail-summary__cell--complete">&nbsp;</td>
          <td className="trail-summary__cell">From</td>
          <td className="trail-summary__cell">To</td>
          <td className="trail-summary__cell">Distance</td>
        </tr>
      </thead>
      <tbody className="trail-summary__body">
        {trail.segments.map((segment, idx) =>
          <tr key={idx} className={`trail-summary__row${segment.complete ? ' trail-summary__row--complete' : ''}`}>
            <td className="trail-summary__cell trail-summary__cell--complete">{ segment.complete ? '✅' : '' }</td>
            <td className="trail-summary__cell">{segment.from}</td>
            <td className="trail-summary__cell">{segment.to}</td>
            <td className="trail-summary__cell">{segment.distance} miles</td>
          </tr>)}
      </tbody>
    </table>
  </section>;

export default TrailSummary;
