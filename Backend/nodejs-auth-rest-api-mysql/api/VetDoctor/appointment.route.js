const router = require("express").Router();

const {getTodayAppointmentList,
    getTimeslots,
    getAppointmentDetails,
    getHealthRecord,
    insertHealthRecord
    
   }=require("./appointment.controller");
   router.get("/getAppointmentDetails",getAppointmentDetails);
//view all article list
router.get("/getTodayAppointmentList",getTodayAppointmentList);

router.get("/getTimeslots",getTimeslots);
router.get("/getHealthRecord",getHealthRecord);

//insert doctor details
router.put("/insertHealthRecord",insertHealthRecord);



module.exports = router;

