const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get("/NoticeRequest",  (req, res, next) => {
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
        `SELECT * FROM notices_example`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/NoticeRequest/LostFound",  (req, res, next) => {
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
        `SELECT * FROM notices_example WHERE NoticeCategory= "LostFound"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/NoticeRequest/Adoption",  (req, res, next) => {
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
        `SELECT * FROM notices_example WHERE NoticeCategory= "Adoption"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/NoticeRequest/Vaccination",  (req, res, next) => {
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
        `SELECT * FROM notices_example WHERE NoticeCategory= "Vaccination"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/NoticeRequest/Breeding",  (req, res, next) => {
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
        `SELECT * FROM notices_example WHERE NoticeCategory= "Breeding"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.get("/NoticeRequest/ShopAds",  (req, res, next) => {
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
        `SELECT * FROM notices_example WHERE NoticeCategory= "ShopAd"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

module.exports = router;