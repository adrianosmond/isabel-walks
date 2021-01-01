import { Component } from 'react';

import BackHomeLink from 'components/BackHomeLink';
import PageHeading from 'components/PageHeading';
import Map from 'components/Map';
import StatsSummary from 'components/StatsSummary';
import TrailSummary from 'components/TrailSummary';

import ScrollTo from 'utils/scrollTo';
import { trails } from 'utils/data';

class Trail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trail: null,
    };
  }

  componentDidMount() {
    const trail = trails.find((t) => t.slug === this.props.match.params.trail);
    this.setState(
      {
        trail,
      },
      () => {
        ScrollTo.scrollTo(this.container, 0);
      },
    );
  }

  render() {
    const { trail } = this.state;
    if (!trail) return null;
    return (
      <div
        ref={(el) => {
          this.container = el;
        }}
      >
        <BackHomeLink />
        <PageHeading title={trail.name} />
        <Map
          segments={trail.segments.map((s, idx) => ({
            url: `${process.env.PUBLIC_URL}/geoJson/${trail.slug}-seg-${idx}.json`,
            complete: s.complete,
          }))}
        />
        <StatsSummary
          distance={trail.distance}
          completeDistance={trail.completeDistance}
          minor={true}
        />
        <TrailSummary trail={trail} />
      </div>
    );
  }
}
export default Trail;
