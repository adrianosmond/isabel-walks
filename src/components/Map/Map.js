import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import ScrollTo from 'utils/scrollTo';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWRyaWFub3Ntb25kIiwiYSI6ImNqa3pvcTlmYTB0b20zcHMxdGVwdXd3dDgifQ.F1bLhz5g91FlzHnt5_PYIw';

class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/adrianosmond/cjkzsq3sx4lh72soazk2xsu7c',
      scrollZoom: false,
      center: [-2.898551, 54.696059],
      zoom: 4,
    });

    ScrollTo.scrollTo(this.mapContainer, 0);

    const { segments } = this.props;
    this.map.on('load', () => {
      this.map.addSource('dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
      });
      this.map.addLayer(
        {
          id: 'hillshading',
          source: 'dem',
          type: 'hillshade',
        },
        'waterway-river-canal-shadow',
      );
      const bounds = new mapboxgl.LngLatBounds();
      Promise.all(
        segments.map((s, idx) =>
          fetch(s.url)
            .then(r => r.json())
            .then(data => {
              this.map.addLayer({
                id: `route-${idx}`,
                type: 'line',
                source: {
                  type: 'geojson',
                  data,
                },
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round',
                },
                paint: {
                  'line-color': s.complete
                    ? 'rgb(173,29,29)'
                    : 'rgba(173,29,29,0.5)',
                  'line-width': s.complete ? 3 : 2,
                },
              });
              return data;
            }),
        ),
      )
        .then(features => {
          features.forEach(seg =>
            seg.features[0].geometry.coordinates.forEach(
              bounds.extend.bind(bounds),
            ),
          );
        })
        .then(() => this.map.fitBounds(bounds, { padding: 20 }));
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <section
        className="map"
        id="map"
        ref={el => {
          this.mapContainer = el;
        }}
      ></section>
    );
  }
}

export default Map;
