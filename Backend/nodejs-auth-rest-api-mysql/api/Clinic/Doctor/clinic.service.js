

const pool = require("../../../Connection/dbConnection");

module.exports = {
  //view doctors details
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

      //view notices details
      getNotices: (callBack) => {
      pool.query(
        "SELECT * FROM notice_on_vaccination",
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

    //insert notices details
    create: (data,callBack) => {
      pool.query(
          `insert into notice_on_vaccination(PublisherName, RegNo, VaccineName, Date, Venue) 
          values(?,?,?,?,?)`,
        [
          data.PublisherName,
          data.RegNo,
          data.VaccineName,
          data.Date,
          data.Venue
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
