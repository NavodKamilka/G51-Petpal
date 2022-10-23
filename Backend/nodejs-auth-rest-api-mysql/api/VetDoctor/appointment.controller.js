
const {getTodayAppointmentList,
    getTimeslots
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




}