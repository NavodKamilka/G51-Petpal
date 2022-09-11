    // functions in services - getAllDoctors

const {getDoctors} = require("./clinic.service");



module.exports = {
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
      }
    }