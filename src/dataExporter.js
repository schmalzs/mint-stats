import fs from 'fs';
import jsonexport from 'jsonexport';

export default (data, filename) =>
  new Promise((resolve, reject) => {
    jsonexport(data, (exportErr, csv) => {
      if (exportErr) {
        reject(exportErr);
      }

      fs.writeFile(filename, csv, writeErr => {
        if (writeErr) {
          reject(writeErr);
        }

        resolve();
      });
    });
  });
