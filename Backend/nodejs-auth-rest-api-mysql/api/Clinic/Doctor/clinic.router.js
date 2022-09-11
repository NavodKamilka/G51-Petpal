const router = require("express").Router();

const {getDoctors}=require("./clinic.controller");


router.get("/getdoctor",getDoctors);

module.exports = router;