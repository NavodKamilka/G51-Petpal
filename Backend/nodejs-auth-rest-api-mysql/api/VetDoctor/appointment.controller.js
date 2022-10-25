
const {getTodayAppointmentList,
    getTimeslots,
    getAppointmentDetails,
    getHealthRecord,
    updateRecord
    } = require("./appointment.service");

module.exports = {
        //get all the articles as list written by all authors stored in the database
        getTodayAppointmentList: (req, res) => {
            getTodayAppointmentList((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },

          getTimeslots: (req, res) => {
            getTimeslots((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },
          getAppointmentDetails: (req, res) => {
            getAppointmentDetails((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },
          getHealthRecord: (req, res) => {
            getHealthRecord((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },
//insert a doctor to the database
insertHealthRecord: (req, res) => {
            
  const body = req.body;
  console.log(body)
  updateRecord(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error"
      });
    }
    return res.status(200).json({
      success: 1,
      data: results
    });
  });
},



}




