

const pool = require("../../../Connection/dbConnection");

module.exports = {
    getDoctors: (callBack) => {
        pool.query(
          "SELECT * FROM doctors_in_clinics",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}
