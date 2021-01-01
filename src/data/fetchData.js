const Tabletop = require('tabletop');
const fs = require('fs');

const names = {
  cleveland: 'Cleveland Way',
  cotswold: 'Cotswold Way',
  glyndwr: 'Glyndwrs Way',
  hadrian: "Hadrian's Wall",
  northdowns: 'North Downs Way',
  offas: "Offa's Dyke",
  peddars: 'Peddars Way / Norfolk Coast Path',
  pembrokeshire: 'Pembrokeshire Coast Path',
  pennineway: 'Pennine Way',
  ridgeway: 'The Ridgeway',
  southdowns: 'South Downs Way',
  southwest: 'South West Coast Path',
  thames: 'Thames Path',
  wolds: 'Yorkshire Wolds Way',
};

const url =
  'https://docs.google.com/spreadsheets/d/1dWCmkRkW6OsHkaDRLPDpYgt9Ov6Km1_6ZRu9Fw2vnSE/edit';

const showInfo = (data) => {
  const trails = [...new Set(data.map((x) => x.trailid))];
  const trailData = trails.reduce(
    (obj, id) => ({
      ...obj,
      [id]: {
        name: names[id],
        segments: data
          .filter((x) => x.trailid === id)
          .map((segment) => ({
            from: segment.from,
            to: segment.to,
            distance: parseFloat(segment.distance),
            complete: segment.complete === 'TRUE',
          })),
      },
    }),
    {},
  );
  fs.writeFileSync(
    './src/data/trails.json',
    JSON.stringify(trailData, null, 2),
  );
};

Tabletop.init({
  key: url,
  callback: showInfo,
  simpleSheet: true,
});
