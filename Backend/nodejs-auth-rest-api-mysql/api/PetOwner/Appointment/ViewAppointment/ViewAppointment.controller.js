const express = require("express");
const router = express.Router();
const db = require("../../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get("/viewAppointment", signupValidation, (req, res, next) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer") ||
      !req.headers.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }
    // const theToken = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    

    db.query(
        // watch the Query
        // `SELECT ad.*,ac.* FROM appointments_on_doctors ad,appointments_on_clinics ac WHERE t.TeamID=tm.TeamID && t.TeamID=('$tId')`,
        // `"SELECT * FROM users where id=?`,
        //`SELECT Date, PetName, AppointmentStatus, ClinicName, DoctorName FROM appointments_on_clinics`,
        `SELECT * FROM appointments_on_clinics`,
        // get details from the  appointments_on_clinics and appointments_on_doctors tables
        // decoded.id,

        // (err,result) => {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         res.send(result)
        //     }
        // }
        (error, results, fields) => {
          if (error) {
            // callBack(error);
            return res.status(400).send({
              msg: "data is not saved!",
            });
          }
          // return callBack(null, results);
          return res.status(200).send(results);
        }
        
        // (error, results, fields) => {
        //   if (error) {
        //     console.log("Has an error")
        //     callBack(error);
        //   }
        //   return callBack(null, results);
        // }
      );
});

module.exports = router;