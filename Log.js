const chalk = require('chalk');


function getDate() {
    const now = new Date();

    let date = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return date;
};


const Logger = {

    info: (text) => console.log(chalk.blue(`[INFO] ${getDate()} : ${text}`)),
    error: (text) => console.log(chalk.red(`[ERROR] ${getDate()} : ${text}`)),
    succes: (text) => console.log(chalk.green(`[SUCCES] ${getDate()} : ${text}`)),
    warning: (text) => console.log(chalk.yellow(`[WARNING] ${getDate()} : ${text}`))
    
};


module.exports = Logger;