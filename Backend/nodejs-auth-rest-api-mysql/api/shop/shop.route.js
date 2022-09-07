const router = require("express").Router();

const {getProduct, insertProducts, getOneFood}=require("./shop.controller");

//view details of all products
router.get("/getproduct",getProduct);

//view details of one product
router.get("/getOneFood/",getOneFood);

//insert product details
router.post("/insertproduct",insertProducts);


//update product details


module.exports = router;