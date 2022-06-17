require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
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
/*

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

*/

const columns = ['trailid', 'from', 'to', 'distance', 'complete'];

const fetchData = async () => {
  const trails = [...new Set(Object.keys(names))];
  const doc = new GoogleSpreadsheet(
    '1dWCmkRkW6OsHkaDRLPDpYgt9Ov6Km1_6ZRu9Fw2vnSE',
  );

  let PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY || '';
  PRIVATE_KEY = PRIVATE_KEY?.replace(/\\n/gm, '\n');

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const rowData = rows.map((r) =>
    columns.map((c) => {
      const v = r[c];
      if (c === 'distance') return parseFloat(v);
      if (c === 'complete') return v === 'TRUE';
      return v;
    }),
  );

  const trailData = trails.reduce(
    (obj, id) => ({
      ...obj,
      [id]: {
        name: names[id],
        segments: rowData
          .filter((x) => x[0] === id)
          .map((segment) => ({
            from: segment[1],
            to: segment[2],
            distance: segment[3],
            complete: segment[4],
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

fetchData();
