    // functions in services - getAllDoctors

const {getClinics} = require("./clinicMain.service");



module.exports = {
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
      }
    }