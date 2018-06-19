import { argv } from 'yargs';
import fs from 'fs';
import parser from 'csvParser';
import jsonexport from 'jsonexport';
import filter from 'filter';
import {
  checkForEvenTransferBalance,
  checkForEvenCreditCardPaymentBalance,
} from 'analyzer';

const INPUT_FILE = argv.input;
const OUTPUT_FILE = argv.output;

console.info(`Parsing file : ${INPUT_FILE}`);

parser(INPUT_FILE)
  .then(data => {
    console.info(`${data.length} unfiltered records`);

    checkForEvenTransferBalance(data);
    checkForEvenCreditCardPaymentBalance(data);
    const filteredData = filter(data);

    console.info(`${filteredData.length} records remaining`);

    jsonexport(filteredData, (err, csv) => {
      if (err) return console.log(err);
      fs.writeFile(OUTPUT_FILE, csv, (err) => {
        if (err) throw err;
        console.log('file saved');
      });
    });
  })
  .catch(error => console.error(error));
