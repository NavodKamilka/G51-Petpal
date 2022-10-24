const router = require("express").Router();


const {getDoctors,
     insertDoctors,
     insertNotices,
     getNotices,
     getPayments,
     getOneDoctor,
     getAppointments
    }=require("./clinic.controller");

//view details of all doctors
router.get("/getdoctor",getDoctors);

//view details of all appointments
router.get("/getappointment",getAppointments);

//view details of one doctor
router.get(`/getOneDoctor/:DocID`,getOneDoctor);

//view details of all notices
router.get("/getnotice",getNotices);

//view details of all notices
router.get("/getpayment",getPayments);

//insert doctor details
router.post("/insertdoctor",insertDoctors);

//insert notices details
router.post("/insertnotice",insertNotices);

module.exports = router;