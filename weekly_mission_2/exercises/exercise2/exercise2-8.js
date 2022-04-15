const explorers = require('./explorers');

const areAllStr = explorers.every((name) => typeof name.missions.onboarding.isFinished === true)

console.log(areAllStr)