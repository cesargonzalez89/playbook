const explorers = require('./explorers');

const explorersContainsJs = explorers.filter((explorer) =>
    explorer.stack.includes('js')
)

console.log(explorersContainsJs)