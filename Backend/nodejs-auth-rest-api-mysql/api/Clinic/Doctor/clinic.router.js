const router = require("express").Router();


const {getDoctors,
     insertDoctors,
     insertNotices
    }=require("./clinic.controller");

//view details of all doctors
router.get("/getdoctor",getDoctors);

//insert doctor details
router.post("/insertdoctor",insertDoctors);

//insert notices details
router.post("/insertnotice",insertNotices);

module.exports = router;