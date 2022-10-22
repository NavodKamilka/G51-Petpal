

const pool = require("../../../Connection/dbConnection");

module.exports = {
    getClinics: (callBack) => {
        pool.query(
          "SELECT * FROM clinic",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}
