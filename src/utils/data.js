import trailsData from 'data/trails.json';

export const trails = Object.keys(trailsData).map((key) => ({
  ...trailsData[key],
  slug: key,
  ...trailsData[key].segments.reduce(
    (prev, curr) => ({
      completeDistance:
        prev.completeDistance + (curr.complete ? curr.distance : 0),
      distance: prev.distance + curr.distance,
      percentage:
        ((prev.completeDistance + (curr.complete ? curr.distance : 0)) /
          (prev.distance + curr.distance)) *
        100,
    }),
    {
      completeDistance: 0,
      distance: 0,
      percentage: 0,
    },
  ),
}));

export const totalData = trails.reduce(
  (prev, curr) => ({
    total: prev.total + curr.distance,
    totalComplete: prev.totalComplete + curr.completeDistance,
  }),
  {
    total: 0,
    totalComplete: 0,
  },
);
