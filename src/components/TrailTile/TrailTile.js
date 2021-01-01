import { Link } from 'react-router-dom';

import images from 'utils/images';
import { formatNumber } from 'utils/utils';

import './TrailTile.css';

const TrailTile = ({ linkTo, trail }) => (
  <Link
    className="trail-tile"
    to={linkTo}
    style={{ backgroundImage: `url(${images[trail.slug]})` }}
  >
    <div className="trail-tile__wrapper">
      <span className="trail-tile__name">{trail.name}</span>
      {trail.distance ? (
        <span>
          <span className="trail-tile__distance">
            ({formatNumber(trail.completeDistance)} out of{' '}
            {formatNumber(trail.distance)} miles complete)
          </span>
          ,
          <span className="trail-tile__progress-bar">
            <span
              className="trail-tile__progress-inner"
              style={{ width: `${trail.percentage}%` }}
            >
              &nbsp;
            </span>
          </span>
        </span>
      ) : null}
    </div>
  </Link>
);
export default TrailTile;
