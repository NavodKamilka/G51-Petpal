const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");
const { signupValidation, loginValidation } = require("../../../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let count={}
router.get("/DashboardUsers",(req,res,next) => {
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
        `SELECT COUNT(UserRole) AS PetOwner_Count  FROM users WHERE UserRole = "PetOwner"`,
        (error, results) => {
            if (error) {
                res.send(error);
            }

            const PetOwnerCount = results[0].PetOwner_Count;
            count.PetOwner_Count=PetOwnerCount;

    db.query(
        `SELECT COUNT(UserRole) AS Doctor_Count  FROM users WHERE UserRole = "Doctor"`,
        (error, results1) => {
            if (error) {
                res.send(error);
            }

            const DoctorCount = results1[0].Doctor_Count;
            count.Doctor_Count=DoctorCount;

    db.query(
        `SELECT COUNT(UserRole) AS Clinic_Count  FROM users WHERE UserRole = "Clinic"`,
        (error, results2) => {
            if (error) {
                res.send(error);
            }

            const ClinicCount = results2[0].Clinic_Count;
            count.Clinic_Count=ClinicCount;

    db.query(
        `SELECT COUNT(UserRole) AS Shop_Count  FROM users WHERE UserRole = "Shop"`,
        (error, results3) => {
            if (error) {
                res.send(error);

            }
            const ShopCount = results3[0].Shop_Count;

            count.Shop_Count=ShopCount;
                    res.send(count)
                });
            });
        });
    });
});
module.exports = router;
