//const rootConfig = require('../../jest.config.js');

//module.exports = rootConfig;
// jest.config.js
module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
