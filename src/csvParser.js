import csv from 'csvtojson';

const parse = filename =>
  new Promise((resolve, reject) => {
    const data = [];

    csv()
      .fromFile(filename)
      .on('json', jsonObj => data.push(jsonObj))
      .on('done', error => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
  });

export default parse;
