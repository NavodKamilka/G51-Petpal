const express = require("express");
const router = express.Router();
const db = require("./Connection/dbConnection");
const { signupValidation, loginValidation } = require("./validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


router.post("/register", signupValidation, (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This user is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
              if(req.body.userRole == 'petowner'){
                  db.query(
                      `INSERT INTO users (UserName, Email, Password, UserRole,Verified) VALUES ('${
                          req.body.name
                      }', ${db.escape(req.body.email)}, ${db.escape(hash)},'${
                          req.body.userRole}','1')`,
                      (err, result) => {
                          if (err) {
                              throw err;
                              return res.status(400).send({
                                  msg: err,
                              });
                          }
                          return res.status(201).send({
                              msg: "The user has been registerd with us!",
                          });
                      }
                  );

                  let mailTransporter =nodemailer.createTransport({
                      service:'gmail',
                      auth:{
                          user:'pinsaradhanika@gmail.com', 
                          pass:'tczpdoygciszqqux'
                      }
                  })//responsible for sending our mail

                  let details ={
                      from:'pinsaradhanika@gmail.com',
                      to: req.body.email,
                      subject:'Welcome To The PetPal Community',
                      text:'Your account has been verified and you are an officially part of our system'
                  }

                  mailTransporter.sendMail(details,(err)=>{
                      if (err){
                          console.log(err);
                      }
                      else{
                          console.log('email sent to user');
                      }
                  })//actually sends the mail
              }
              else{
                  db.query(
                      `INSERT INTO users (UserName, Email, Password, UserRole,Verified) VALUES ('${
                          req.body.name
                      }', ${db.escape(req.body.email)}, ${db.escape(hash)},'${
                          req.body.userRole}','0')`,
                      (err, result) => {
                          if (err) {
                              throw err;
                              return res.status(400).send({
                                  msg: err,
                              });
                          }
                          return res.status(201).send({
                              msg: "The user has been registerd with us!",
                          });
                      }
                  );
              }
            // has hashed pw => add to database

           
          }
        });
      }
    }
  );
});
router.post("/login", loginValidation, (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: "Email or password is incorrect!",
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Email or password is incorrect!",
            });
          }
          if (bResult) {
            const token = jwt.sign(
              { id: result[0].id },
              "the-super-strong-secrect",
              { expiresIn: "3h" }
            );
            // db.query(
            //   `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            // );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
});
router.post("/get-user", signupValidation, (req, res, next) => {
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
    "SELECT * FROM users where id=?",
    decoded.id,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "Fetch Successfully."
      });
    }
  );
});
module.exports = router;
