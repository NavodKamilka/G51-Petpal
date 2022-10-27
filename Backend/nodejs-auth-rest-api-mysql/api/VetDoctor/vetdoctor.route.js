const router = require("express").Router();

const {getAllArticles,
    getArticlesForAuthor,
    getArticlesForAuthorTwo,
    getVetReviews,
    getPendingArticles,
    getDoctorList,
    deleteTime,
    getSelected
    
   }=require("./vetdoctor.controller");

//view all article list
router.get("/getAllArticles",getAllArticles);

//view all article list from author
router.get("/getArticlesForAuthor",getArticlesForAuthor);

router.get("/getArticlesForAuthorTwo",getArticlesForAuthorTwo);
//view all article list from author
router.get("/getVetReviews",getVetReviews);

router.get("/getPendingArticles",getPendingArticles);
router.get("/getDoctorList",getDoctorList);
router.delete("/deleteTime/:ID",deleteTime);
//view details of one skincare 
router.get(`/getSelectedAppointment/:AppointmentID`,getSelected);
module.exports = router;