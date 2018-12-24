import { argv } from 'yargs';
import * as logger from 'logger';
import importData from 'dataImporter';
import exportData from 'dataExporter';
import analyze from 'analyzer';
import filter from 'filter';

const { input: INPUT_FILE, output: OUTPUT_FILE } = argv;

if (!INPUT_FILE || !OUTPUT_FILE) {
  logger.error('Missing "input" and/or "output" filename');
  process.exit(1);
}

logger.info(`Parsing: ${INPUT_FILE}`);

importData(INPUT_FILE)
  .then(data => {
    logger.info(`${data.length} unfiltered records`);
    return data;
  })
  .then(analyze)
  .then(filter)
  .then(data => {
    logger.info(`${data.length} records remaining`);
    return data;
  })
  .then(data => {
    exportData(data, OUTPUT_FILE);
  })
  .then(() => logger.success('File saved!'))
  .catch(error => {
    logger.error(error);
    process.exit(1);
  });
