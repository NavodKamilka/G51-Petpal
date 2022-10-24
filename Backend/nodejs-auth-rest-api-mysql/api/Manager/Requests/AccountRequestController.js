const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');


router.get("/AccountRequest",  (req, res, next) => {
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

    db.query(
        `SELECT * FROM users WHERE Verified ='0'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/AccountRequest/Doctor",  (req, res, next) => {
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

    db.query(
        `SELECT * FROM users WHERE UserRole= "Doctor" AND Verified ='0'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/AccountRequest/Clinic",  (req, res, next) => {
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

    db.query(
        `SELECT * FROM users WHERE UserRole= "Clinic" AND Verified ='0'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/AccountRequest/Shop",  (req, res, next) => {
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

    db.query(
        `SELECT * FROM users WHERE UserRole= "Shop" AND Verified ='0'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
        }
    );

});

router.delete("/AccountRequest/RequestDelete/:id",(req,res,next)=> {
    const id =req.params.id;
    db.query(
        `DELETE FROM users WHERE UserID =?`,id
    )
});

router.put("/AccountRequest/AcceptRequest/:id",(req,res,next)=>{
    const id =req.params.id;
    let toEmail=[];

    db.query(
        `UPDATE users SET verified ='1' WHERE UserID = ?`,id,(err,rows)=>{
            if(err) {
                throw err;
            }
            else {
                db.query(`SELECT Email FROM users WHERE UserID = ?`,id,(error, results) => {
                    if (error) {
                        res.send(error);
                    }
                    toEmail=results[0].Email;

                    let mailTransporter =nodemailer.createTransport({
                        service:'gmail',
                        auth:{
                            user:'pinsaradhanika@gmail.com',
                            pass:'tczpdoygciszqqux'
                        }
                    })//responsible for sending our mail

                    let details ={
                        from:'pinsaradhanika@gmail.com',
                        to:toEmail,
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
                })
            }
        }
    )






});

module.exports = router;