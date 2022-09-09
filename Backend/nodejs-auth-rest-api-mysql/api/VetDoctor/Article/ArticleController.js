const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get("/ViewArticleList",  (req, res, next) => {
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

    // db.query(
    //     `SELECT * FROM article`,
    //     (error, results) => {
    //         if (error) {
    //             res.send(error);
    //         }
    //         res.send(results)
    //         console.log(results);
    //     }
    // );
    // db.query( 
    //     'SELECT * FROM docors WHERE DocID = results.AuthorID',
    //     (error1, results1) => {
    //         if (error1) {
    //             res.send(error1);
    //         }
    //         res.send(results1)
    //         console.log(results1);
    //     }
    // );

});


module.exports = router;