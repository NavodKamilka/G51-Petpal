const router = require("express").Router();


const {getDoctors,
     insertDoctors
    }=require("./clinic.controller");

//view details of all doctors
router.get("/getdoctor",getDoctors);

//insert food product details
router.post("/insertdoctor",insertDoctors);

module.exports = router;