/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-floating-promises */
import fs from 'fs/promises';

const newCountry = { name: 'Italia', capital: 'Milano' };

// Async hace que me devuelva una promesa

export const addCountry = async (country: Record<string, string>) => {
  const stringDataInitial = await fs.readFile('data.json', {
    encoding: 'utf-8',
  });

  const data = JSON.parse(stringDataInitial);
  data.push(country);
  const stringData = JSON.stringify(data);
  fs.writeFile('data.json', stringData, { encoding: 'utf-8' });
};

// Test addCountry(newCountry);

// updateCountry({ name: 'Italia', capital: 'Roma' });
// Update country sería lo mismo que add, cambiando código JS en el lugar de push
