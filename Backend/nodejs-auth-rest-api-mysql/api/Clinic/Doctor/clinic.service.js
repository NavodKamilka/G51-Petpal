

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

      //insert doctor details
      create: (data,callBack) => {
        pool.query(
            `insert into doctors_in_clinics(DoctorName, RegNo, Qualification, Email, TelNum) 
            values(?,?,?,?,?)`,
          [
            data.DoctorName,
            data.RegNo,
            data.Qualification,
            data.Email,
            data.TelNum
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
         );
  },

}
