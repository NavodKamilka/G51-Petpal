const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');
const AppointmentRouterPetOwner = require('./api/PetOwner/Appointment.router');
const DiscussionRouterPetOwner = require('./api/PetOwner/Discussion.router');
const NoticeRouterPetOwner = require('./api/PetOwner/Notice.router');

 //clinic-doctor
 const DoctorRouter = require("./api/Clinic/Doctor/clinic.router.js");

 //clinic
 const ClinicRouter = require("./api/Guest/HealthCare/clinicMain.router.js");

const app = express();
 
app.use(express.json());
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());


 
app.use('/api', indexRouter);
app.use('/api', AppointmentRouterPetOwner);
app.use('/api', DiscussionRouterPetOwner);
app.use('/api', NoticeRouterPetOwner);
 
//doctor
app.use("/api/doctor",DoctorRouter);

//guest
app.use("/api/clinic",ClinicRouter);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(3001,() => console.log('Server is running on port 3001'));
