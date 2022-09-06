const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get("/AccountManagement",  (req, res, next) => {
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
        `SELECT * FROM users `,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
            // console.log(results);
        }
    );

});

router.get("/AccountManagement/PetOwner",  (req, res, next) => {
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
        `SELECT * FROM users WHERE UserRole = 'PetOwner'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
            // console.log(results);
        }
    );

});

router.get("/AccountManagement/Clinic",  (req, res, next) => {
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
        `SELECT * FROM users WHERE UserRole = 'Clinic'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
            // console.log(results);
        }
    );

});

router.get("/AccountManagement/Doctor",  (req, res, next) => {
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
        `SELECT * FROM users WHERE UserRole = 'Doctor'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
            // console.log(results);
        }
    );

});

router.get("/AccountManagement/Shop",  (req, res, next) => {
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
        `SELECT * FROM users WHERE UserRole = 'Shop'`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)
            // console.log(results);
        }
    );

});

module.exports = router;