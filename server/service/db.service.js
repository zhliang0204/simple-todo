const database = require('../config/database');

const dbService = () => {
  const syncDB = () => database.sync();

  const successfulDBStart = () =>
    console.info(
      'connection to the database has been established successfully'
    );

  const errorDBStart = err =>
    console.info('unable to connect to the database:', err);

  const startDB = async () => {
    try {
      await syncDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
    }
  };

  return {
    startDB
  };
};

module.exports = dbService;
