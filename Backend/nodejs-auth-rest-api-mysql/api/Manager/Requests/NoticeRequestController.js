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
        `SELECT * FROM notices WHERE flag ='0'`,
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
        `SELECT * FROM notices WHERE NoticeType= "LostFound" AND Flag="0"`,
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
        `SELECT * FROM notices WHERE NoticeType= "Adoption" AND Flag="0"`,
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
        `SELECT * FROM notices WHERE NoticeType= "Vaccination" AND Flag="0"`,
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
        `SELECT * FROM notices WHERE NoticeType= "Breeding" AND Flag="0"`,
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
        `SELECT * FROM notices WHERE NoticeType= "ShopAds" AND Flag="0"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }
            res.send(results)

        }
    );

});

router.delete("/NoticeRequest/RequestDelete/:id",(req,res,next)=> {
    const id =req.params.id;
    db.query(
        `DELETE FROM notices WHERE NoticeID =? AND Flag="0"`,id
    )
});

router.put("/NoticeRequest/AcceptRequest/:id",(req,res,next)=>{
    const id =req.params.id;
    db.query(
        `UPDATE notices SET flag ='1' WHERE NoticeId = ?`,id,(err,rows)=>{
            if(err) throw err;
        }
    )
});

module.exports = router;