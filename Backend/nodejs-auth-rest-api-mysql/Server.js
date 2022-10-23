const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');

//PetOwner
const AppointmentRouterPetOwner = require('./api/PetOwner/Appointment.router');
const DiscussionRouterPetOwner = require('./api/PetOwner/Discussion.router');
const NoticeRouterPetOwner = require('./api/PetOwner/Notice.router');
const AccountRequestRouterManager = require('./api/Manager/Requests/AccountRequestRouter');
const NoticeRequestRouterManager = require('./api/Manager/Requests/NoticeRequestRouter');
const AccountManagementRouterManager = require('./api/Manager/Requests/AccountManagementRouter');
const shopRouter = require("./api/shop/shop.route");
const DashboardUsersRouterManager = require('./api/Manager/Dashboard/DashboardUsersRouter');

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
app.use('/api', AccountRequestRouterManager);
app.use('/api', NoticeRequestRouterManager);
app.use('/api', AccountManagementRouterManager);
app.use('/api', DashboardUsersRouterManager);
 
//shop
//all routes related to shop will be stored here
app.use("/api/shop",shopRouter);


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
