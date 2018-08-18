import React from 'react';
import TrailTile from 'components/TrailTile';
import { trails } from 'utils/data';
import './TrailGrid.css';

const TrailGrid = () => (
    <section>
      <ul className="trail-grid">
        { trails.map(trail =>
          <li key={trail.slug} className="trail-grid__tile">
            <TrailTile linkTo={`trail/${trail.slug}`} trail={trail} />
          </li>)}
        <li className="trail-grid__tile">
          <TrailTile linkTo="map" trail={{
            slug: 'map',
            name: 'View all trails on a map',
          }} />
        </li>
      </ul>
    </section>
);

export default TrailGrid;
