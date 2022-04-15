const explorers = require('./explorers');

const explorerFromCDMX = explorers.find((explorer) => explorer.city === 'CDMX')

console.log(explorerFromCDMX)