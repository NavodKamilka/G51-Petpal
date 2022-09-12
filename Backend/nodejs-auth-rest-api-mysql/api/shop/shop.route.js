const router = require("express").Router();

const {getProduct, insertProducts, getOneFood, getShopList, insertPet, deleteProduct}=require("./shop.controller");

//view details of all products
router.get("/getproduct",getProduct);

//view details of one product
router.get(`/getOneFood/:foodId`,getOneFood);

//insert product details
router.post("/insertproduct",insertProducts);

//view details of all shops
router.get("/getShopList",getShopList);

//insert pet details
router.post("/insertpet",insertPet);

//delete a product
router.delete("/deleteProduct/:foodId", deleteProduct);

module.exports = router;