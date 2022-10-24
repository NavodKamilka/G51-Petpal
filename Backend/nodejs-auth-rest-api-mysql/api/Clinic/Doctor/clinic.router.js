const router = require("express").Router();


const {getDoctors,
     insertDoctors,
     insertNotices,
     getNotices,
     getPayments,
     getOneDoctor,
     getAppointments,
     getTodayappos,
     getPreviousappos,
     getUpappos,
     deleteAppo
    }=require("./clinic.controller");

//view details of all doctors
router.get("/getdoctor",getDoctors);

//view details of all appointments
router.get("/getappointment",getAppointments);

//view details of today appointments
router.get("/gettodayappo",getTodayappos);

//view details of previous appointments
router.get("/getpreviousappo",getPreviousappos);

//view details of upcomming appointments
router.get("/getupappo",getUpappos);

//delete a food product
router.delete("/deleteAppo/:AppointmentID", deleteAppo);

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