const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/AddDocTimeslot",  (req, res, next) => {
  console.log("called controller");

  // if(("SELECT COUNT FROM time_slot_doctors WHERE DocID=1 AND Day=?;",[req.headers.day]) == 0){
    console.log("zero");
    db.query(
      
        `INSERT INTO time_slot_doctors(DocID, Day,StartTime,EndTime,MaxTokens) VALUES (?,?,?,?,?)`,
        [
            1,
            req.headers.day,
            req.headers.starttime,
            req.headers.endtime,
            req.headers.slots
            
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

        // }

});


module.exports = router;