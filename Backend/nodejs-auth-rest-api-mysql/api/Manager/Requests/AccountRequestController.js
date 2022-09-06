const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
        `SELECT * FROM user_requests`,
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
        `SELECT * FROM user_requests WHERE UserType= "Doctor"`,
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
        `SELECT * FROM user_requests WHERE UserType= "Clinic"`,
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
        `SELECT * FROM user_requests WHERE UserType= "Shop"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});
module.exports = router;