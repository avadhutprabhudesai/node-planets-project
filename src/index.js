import { parse } from 'csv-parse';
import fs from 'fs';

const habitablePlanets = [];
const kepler = fs.createReadStream('kepler_data.csv');
const parser = parse({
  comment: '#',
  columns: true,
});
kepler
  .pipe(parser)
  .on('data', (data) => {
    if (
      data.koi_disposition === 'CONFIRMED' &&
      data.koi_insol > 0.36 &&
      data.koi_insol < 1.11 &&
      data.koi_prad < 1.6
    ) {
      habitablePlanets.push(data);
    }
  })
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found!!!`);
  });
