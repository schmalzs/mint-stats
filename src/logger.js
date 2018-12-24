import chalk from 'chalk';

export const { info } = console;

export const success = (...args) => console.info(chalk.black.bgGreen(...args));

export const warn = (...args) => console.warn(chalk.black.bgYellow(...args));

export const error = (...args) => console.error(chalk.black.bgRed(...args));
