const router = require("express").Router();

const {getProduct, insertProducts, getOneFood, getShopList,insertPet}=require("./shop.controller");

//view details of all products
router.get("/getproduct",getProduct);

//view details of one product
router.get(`/getOneFood/:id`,getOneFood);

//insert product details
router.post("/insertproduct",insertProducts);

//view details of all shops
router.get("/getShopList",getShopList);

//insert pet details
router.post("/insertpet",insertPet);

module.exports = router;