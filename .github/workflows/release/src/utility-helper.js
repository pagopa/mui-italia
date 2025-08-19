const recommendedBump = require('conventional-recommended-bump');
const { promisify } = require('util');

const recommendedBumpAsync = promisify(recommendedBump);

async function getRecommendedBump() {
  const recommendation = await recommendedBumpAsync({
    preset: 'angular',
  });
  return recommendation.releaseType;
}

module.exports = {
  getRecommendedBump,
};
