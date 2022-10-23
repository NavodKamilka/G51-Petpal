const pool = require("../../Connection/dbConnection");

module.exports = {

    getTimeslots: (callBack) => {
        const current = new Date();
        const date = `${current.getDay()}`;
        if(date==0){
            var day = "Sunday";
          }
          else if(date == 1){
            var day = "Monday";
          }
          else if(date == 2){
            var day = "Tuesday";
          }
          else if(date == 3){
            var day = "Wedneday";
          }
          else if(date == 4){
            var day = "Thursday";
          }
          else if(date == 5){
            var day = "Friday";
          }
          else if(date == 6){
            var day = "Saturday";
          }
        
        pool.query(
          "SELECT * FROM time_slot_doctors WHERE DocID = 1 AND Day=?;",[day],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
  //get all articles as a list
    getTodayAppointmentList: (callBack) => {
        const day = today.getDate()  ;
        console.log(day);
        pool.query(
          "SELECT * FROM article WHERE Flag = 1",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },



}