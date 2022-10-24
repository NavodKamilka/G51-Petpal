const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/AddDocTimeslot",  (req, res, next) => {
    // if (
    //     !req.headers.authorization ||
    //     !req.headers.authorization.startsWith("Bearer") ||
    //     !req.headers.authorization.split(" ")[1]
    // ) {
    //     return res.status(422).json({
    //         message: "Please provide the token",
    //     });
    // }
    // const theToken = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    // console.log("jgjjgjgj",req.headers.day,"hghgjhg")

    db.query(
        `INSERT INTO time_slot_doctors(DocID, Day,StartTime,EndTime,MaxTokens) VALUES (?,?,?,?,?)`,
        [
            1,
            req.body.day,
            req.body.starttime,
            req.body.endtime,
            req.body.slots
            
          ],
          // (error, results, fields) => {
          //   if (error) {
          //     callBack(error);
          //   }
          //   return callBack(null, results);
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
        );

});


module.exports = router;