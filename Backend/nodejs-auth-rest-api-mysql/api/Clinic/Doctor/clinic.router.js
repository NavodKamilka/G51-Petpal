const router = require("express").Router();


const {getDoctors,
     insertDoctors,
     insertNotices,
     getNotices
    }=require("./clinic.controller");

//view details of all doctors
router.get("/getdoctor",getDoctors);

//view details of all notices
router.get("/getnotice",getNotices);

//insert doctor details
router.post("/insertdoctor",insertDoctors);

//insert notices details
router.post("/insertnotice",insertNotices);

module.exports = router;