const router = require("express").Router();

const {insertDoctors}=require("./addDoc.controller");


router.post("/insertdoctor",insertDoctors);

module.exports = router;