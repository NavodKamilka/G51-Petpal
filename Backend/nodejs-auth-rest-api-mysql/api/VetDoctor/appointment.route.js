const router = require("express").Router();

const {getTodayAppointmentList,
    getTimeslots
    
   }=require("./appointment.controller");

//view all article list
router.get("/getTodayAppointmentList",getTodayAppointmentList);

router.get("/getTimeslots",getTimeslots);


module.exports = router;