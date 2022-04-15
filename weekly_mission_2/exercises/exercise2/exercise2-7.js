const explorers = require('./explorers');

const areSomeTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)

console.log(areSomeTrue)