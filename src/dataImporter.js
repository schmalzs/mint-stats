import csv from 'csvtojson';

export default filename => csv().fromFile(filename);
