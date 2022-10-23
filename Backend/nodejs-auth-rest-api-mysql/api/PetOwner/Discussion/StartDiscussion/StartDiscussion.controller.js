const express = require("express");
const router = express.Router();
const db = require("../../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/startDiscussion", (req, res, next) => {
  
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer") ||
    !req.headers.authorization.split(" ")[1]
  ){
    return res.status(422).json({
      message: "Please provide the token",
    });
  }
    // const theToken = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    
    db.query(
        `insert into discussion(Title, Content) 
                  values(?,?)`,
        [
          req.body.Title,
          req.body.Content
          
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

});

module.exports = router;