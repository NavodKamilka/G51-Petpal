    // functions in services - getAllDoctors
    const {getDoctors,
          getClinics, 
          create,
          createdoc,
          getNotices,
          getPayments,
          getOneDoctor,
          getAppointments,
          getTodayappos,
          getPreviousappos,
          getUpappos,
          deleteAppo
          } = require("./clinic.service");




module.exports = {
  //Get doctor details
    getDoctors: (req, res) => {
        getDoctors((err, results) => {
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

      //Get clinic details
     getClinics: (req, res) => {
      getClinics((err, results) => {
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

       //Get appoitment details
      getAppointments: (req, res) => {
      getAppointments((err, results) => {
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

    //Get today appoitment details
    getTodayappos: (req, res) => {
      getTodayappos((err, results) => {
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

    //Get previous appoitment details
    getPreviousappos: (req, res) => {
      getPreviousappos((err, results) => {
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

    //Get upcomming appoitment details
    getUpappos: (req, res) => {
      getUpappos((err, results) => {
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

    //delete appointment
    deleteAppo: (req, res) => {
      const id = req.params.AppointmentID; 

      deleteAppo(id, (err, results) => {
        if (err) {
          console.log(err);
          console.log(id);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "Appointment deleted successfully"
        });
      });
    },

      //Get notice details
      getNotices: (req, res) => {
      getNotices((err, results) => {
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

    //Get payment details
    getPayments: (req, res) => {
      getPayments((err, results) => {
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
      insertDoctors: (req, res) => {
            
        const body = req.body;
        createdoc(body, (err, results) => {
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

      //get details of one doctor
      getOneDoctor: (req, res) => {
        
        const id = req.params.DocID;
        getOneDoctor(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            
            return res.json({
              success: 0,
              message: "Record not Found",
            });
          }
          // results.password = undefined;

          return res.json({
            success: 1,
            data: results,
          });
          
        });
      },


      //insert a doctor to the database
      insertNotices: (req, res) => {
            
        const body = req.body;
        create(body, (err, results) => {
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