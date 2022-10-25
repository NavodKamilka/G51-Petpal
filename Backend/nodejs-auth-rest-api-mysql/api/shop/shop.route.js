const router = require("express").Router();

const {getProduct,
     insertProducts,
     getOneFood, 
     getShopList, 
     insertPet,  
     getAllAccessories,
     getOneAccessory,
     getAllSkincare,
     getOneSkincare,
     deleteOneFood,
     deleteOneAccessory,
     deleteOneSkincare,
     updateOneFood,
     updateOneAccessory,
     updateOneSkincare,
     getAllPets,
     getOnePet,
     updateOnePet  
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
router.post("/insertPet",insertPet);

//view all accessories 
router.get("/getAllAccessories",getAllAccessories);

//view details of one accessory 
router.get(`/getOneAccessory/:accessoryId`,getOneAccessory);

//view all skincare products 
router.get("/getAllSkincare",getAllSkincare);

//view details of one skincare 
router.get(`/getOneSkincare/:skincareId`,getOneSkincare);

//delete a food product
router.delete("/deleteOneFood/:foodId", deleteOneFood);

//delete one accessory 
router.delete("/deleteOneAccessory/:accessoryId", deleteOneAccessory);

//delete one skin care item 
router.delete("/deleteOneSkincare/:skincareId", deleteOneSkincare);

//update one food item 
router.put("/updateOneFood", updateOneFood);

//update one accessory item 
router.put("/updateOneAccessory", updateOneAccessory);

//update one skincare item 
router.put("/updateOneSkincare", updateOneSkincare);

//view all pets 
router.get("/getAllPets",getAllPets);

//view details of one pet 
router.get(`/getOnePet/:petId`,getOnePet);

//update one pet item 
router.put("/updateOnePet", updateOnePet);
module.exports = router;