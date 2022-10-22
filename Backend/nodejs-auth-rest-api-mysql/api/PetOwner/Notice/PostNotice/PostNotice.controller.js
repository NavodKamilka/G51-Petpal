const express = require("express");
const router = express.Router();
const db = require("../../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/postNotice", signupValidation, (req, res, next) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer") ||
      !req.headers.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }
    const theToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    
    
    db.query(
        `insert into notices(NoticeTopic, PublisherName, NIC, PublisherAddress, TelNum, Email, RequestedDate, District, NoticeType) 
                  values(?,?,?,?,?,?,?,?,?)`,
        [
          req.body.NoticeTopic,
          req.body.PublisherName,
          req.body.NIC,
          req.body.PublisherAddress,
          req.body.TelNum,
          req.body.Email,
          req.body.RequestedDate,
          req.body.District,
          req.body.NoticeType
          
          
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        // return console.log("Success");
        }
      );

});

module.exports = router;