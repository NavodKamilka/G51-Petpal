

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

      //view clinic details
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

    //view appointments details
    getAppointments: (callBack) => {
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

    //view today appointments details
    getTodayappos: (callBack) => {
      pool.query(
        "SELECT * FROM appointments_on_clinics where Date=curdate();",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

    //view previous appointments details
    getPreviousappos: (callBack) => {
      pool.query(
        "SELECT * FROM appointments_on_clinics where Date < curdate();",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

    //view upcomming appointments details
    getUpappos: (callBack) => {
      pool.query(
        "SELECT * FROM appointments_on_clinics where Date > curdate();",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

    //delete appointment
    deleteAppo : (id, callBack) => {
      pool.query(
        'DELETE FROM appointments_on_clinics WHERE AppointmentID = ?', [id],
        (error, results,fields) => {
        if (error) {
          callBack(error) 
        }
        return callBack(null, results);  
      }
      );
    },

      //get details of one doctor
      getOneDoctor: (id, callBack) => {
        pool.query(
          `select DocID, DoctorName, RegNo, Qualification, Email, TelNum from doctors_in_clinics where DocID = ?;`,
          [id],
          // 1,
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

    //view payments details
    getPayments: (callBack) => {
      pool.query(
        "SELECT * FROM clinicpayments",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

      //insert doctor details
      createdoc: (data,callBack) => {
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
          `insert into notice_on_vaccination(PublisherName, RegNo, VaccineName, Date, Time, Venue) 
          values(?,?,?,?,?,?)`,
        [
          data.PublisherName,
          data.RegNo,
          data.VaccineName,
          data.Date,
          data.Time,
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
