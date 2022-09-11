const router = require("express").Router();

const {getClinics}=require("./clinicMain.controller");


router.get("/getclinic",getClinics);

module.exports = router;