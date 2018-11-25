const motivation = require('./motivation.json');
const weirdRoom = require('./weirdRoom.json');
const troubleShooting = require('./troubleShooting.json');

const setDirectory = {
  isDirectory: true,
  personalInfrastructure: {
    isDirectory: true,
    motivation,
    weirdRoom,
  },
  math: {
    isDirectory: true,
    troubleShooting,
  },
};

module.exports = setDirectory;
