const router = require("express").Router();

const {getTodayAppointmentList,
    getTimeslots,
    getAppointmentDetails,
    getHealthRecord,
    insertHealthRecord,
    getPrevAppointmentList,
    getUpAppointmentList
    
   }=require("./appointment.controller");
   router.get("/getAppointmentDetails",getAppointmentDetails);
//view all article list
router.get("/getTodayAppointmentList",getTodayAppointmentList);

router.get("/getTimeslots",getTimeslots);
router.get("/getHealthRecord",getHealthRecord);

//insert doctor details
router.put("/insertHealthRecord",insertHealthRecord);
router.get("/getUpAppointmentList",getUpAppointmentList);
router.get("/getPrevAppointmentList",getPrevAppointmentList);



module.exports = router;

