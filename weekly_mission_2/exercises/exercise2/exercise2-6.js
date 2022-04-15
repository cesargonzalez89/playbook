const explorers = require('./explorers');

const result_of_reduce = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)

console.log(result_of_reduce)