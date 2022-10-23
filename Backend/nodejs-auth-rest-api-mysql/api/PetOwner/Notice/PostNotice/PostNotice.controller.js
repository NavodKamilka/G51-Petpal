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
    // const theToken = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    
    // console.log("NNNN->"+req.file.fileName)
    db.query(
        `insert into notices(NoticeTopic, PublisherName, NIC, PublisherAddress, TelNum, Email, RequestedDate, District, NoticeType, Image) 
                  values(?,?,?,?,?,?,?,?,?,?)`,
        // `insert into notices(Image) 
        //           values(?)`,

        [
          req.body.NoticeTopic,
          req.body.PublisherName,
          req.body.NIC,
          req.body.PublisherAddress,
          req.body.TelNum,
          req.body.Email,
          req.body.RequestedDate,
          req.body.District,
          req.body.NoticeType,
          req.body.Url
           
        ],
        // (error, results, fields) => {
        //   if (error) {
        //     callBack(error);
        //   }
        //   return callBack(null, results);
        // return console.log("Success");
        // }
        (error, results, fields) => {
          if (error) {
            // callBack(error);
            //console.log(error);
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