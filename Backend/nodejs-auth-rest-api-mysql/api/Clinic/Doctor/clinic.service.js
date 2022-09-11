

const pool = require("../../../Connection/dbConnection");

module.exports = {
    getDoctors: (callBack) => {
        pool.query(
          "SELECT * FROM doctors",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}
