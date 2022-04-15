const explorers = require('./explorers');

const explorersStack = explorers.map(function(explorer){ return explorer.stack})
console.log(explorersStack)