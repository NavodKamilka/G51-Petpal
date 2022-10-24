const router = require("express").Router();

const {getAllArticles,
    getArticlesForAuthor,
    getVetReviews
    // insertProducts,
    // getOneFood, 
    
   }=require("./vetdoctor.controller");

//view all article list
router.get("/getAllArticles",getAllArticles);

//view all article list from author
router.get("/getArticlesForAuthor",getArticlesForAuthor);
//view all article list from author
router.get("/getVetReviews",getVetReviews);

module.exports = router;