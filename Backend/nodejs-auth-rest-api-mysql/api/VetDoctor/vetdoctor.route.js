const router = require("express").Router();

const {getAllArticles,
    getArticlesForAuthor
    // insertProducts,
    // getOneFood, 
    
   }=require("./vetdoctor.controller");

//view all article list
router.get("/getAllArticles",getAllArticles);

//view all article list from author
router.get("/getArticlesForAuthor",getArticlesForAuthor);

//update one accessory item 
// router.put("/updateOneAccessory", updateOneAccessory);

module.exports = router;