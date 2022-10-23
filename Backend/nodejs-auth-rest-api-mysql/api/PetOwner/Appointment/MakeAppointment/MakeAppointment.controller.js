const express = require("express");
const router = express.Router();
const db = require("../../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/makeAppointment",  (req, res, next) => {
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
    

    if(!(req.body.ClinicName)){
        
        db.query(
            `insert into appointments_on_doctors(DoctorName, OwnerName, PetName, PetType,  Date,Time) 
                      values(?,?,?,?,?,?)`,
            [
              req.body.DoctorName,
              req.body.OwnerName,
              req.body.PetName,
              req.body.PetType,
              req.body.Date,
              req.body.Time
            ],
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
          );
    }else{
        
        db.query(
            `insert into appointments_on_clinics(ClinicName, DoctorName, OwnerName, PetName, PetType,  Date,Time) 
                      values(?,?,?,?,?,?,?)`,
            [
              req.body.ClinicName,
              req.body.DoctorName,
              req.body.OwnerName,
              req.body.PetName,
              req.body.PetType,
              req.body.Date,
              req.body.Time
            ],
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
          );
    }
});

module.exports = router;