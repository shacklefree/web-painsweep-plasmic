
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['n5wueNRSLrQnW6SPfTfUrG'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  