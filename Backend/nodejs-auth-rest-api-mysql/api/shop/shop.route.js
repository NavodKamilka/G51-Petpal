const router = require("express").Router();

const {getProduct,
     insertProducts,
     getOneFood, 
     getShopList, 
     insertPet, 
     deleteProduct, 
     getAllAccessories,
     getOneAccessory,
     getAllSkincare,
     getOneSkincare
    }=require("./shop.controller");

//view details of all food products
router.get("/getproduct",getProduct);

//view details of one food product
router.get(`/getOneFood/:foodId`,getOneFood);

//insert food product details
router.post("/insertproduct",insertProducts);

//view details of all shops
router.get("/getShopList",getShopList);

//insert pet details
router.post("/insertpet",insertPet);

//delete a food product
router.delete("/deleteProduct/:foodId", deleteProduct);

//view all accessories 
router.get("/getAllAccessories",getAllAccessories);

//view details of one accessory 
router.get(`/getOneAccessory/:accessoryId`,getOneAccessory);

//view all skincare products 
router.get("/getAllSkincare",getAllSkincare);

//view details of one skincare 
router.get(`/getOneSkincare/:skincareId`,getOneSkincare);

module.exports = router;