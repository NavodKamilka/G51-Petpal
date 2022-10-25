    // functions in services - getAllProducts

    const {getProduct, 
          create,
          getOneFood, 
          getShopList,  
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
          insertPet,
          getOnePet,
          updateOnePet,
          deleteOnePet
        } = require("./shop.service");



    module.exports = {
        //get all the food product details stored in the database
        getProduct: (req, res) => {
            getProduct((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },



          //get details of one product
          getOneFood: (req, res) => {
            const id = req.params.foodId;
            
            getOneFood(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              if (!results) {
                
                return res.json({
                  success: 0,
                  message: "Record not Found",
                });
              }
              // results.password = undefined;

              return res.json({
                success: 1,
                data: results,
              });
              
            });
          },



          //insert a product to the database
          insertProducts: (req, res) => {
            
            const body = req.body;
            create(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection error"
                });
              }
              return res.status(200).json({
                success: 1,
                data: results
              });
            });
          },



            //get the product details stored in the database
            getShopList: (req, res) => {
              getShopList((err, results) => {
                if (err) {
                  console.log(err);
                  return;
                }
                return res.json({
                  success: 1,
                  data: results
                });
              });
            },


            
             //insert a product to the database
          insertPet: (req, res) => {
            console.log("hello");
            const body = req.body;
            insertPet(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection error"
                });
              }
              return res.status(200).json({
                success: 1,
                data: results
              });
            });
          },



          //get all the food product details stored in the database
          getAllAccessories: (req, res) => {
            getAllAccessories((err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                data: results
              });
            });
          },

          

          //get details of one product
          getOneAccessory: (req, res) => {
            const id = req.params.accessoryId;
            
            getOneAccessory(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              if (!results) {               
                return res.json({
                  success: 0,
                  message: "Record not Found",
                });
              }          
              return res.json({
                success: 1,
                data: results,
              });
              
            });
          },



            //get all the food product details stored in the database
            getAllSkincare: (req, res) => {
              getAllSkincare((err, results) => {
                if (err) {
                  console.log(err);
                  return;
                }
                return res.json({
                  success: 1,
                  data: results
                });
              });
            },



             //get details of one product
            getOneSkincare: (req, res) => {
            const id = req.params.skincareId;
            
            getOneSkincare(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              if (!results) {
                
                return res.json({
                  success: 0,
                  message: "Record not Found",
                });
              }
              // results.password = undefined;

              return res.json({
                success: 1,
                data: results,
              });
              
            });
          },



           //delete product
           deleteOneFood: (req, res) => {
            const id = req.params.foodId; 

            deleteOneFood(id, (err, results) => {
              if (err) {
                console.log(err);
                console.log(id);
                return;
              }
              if (!results) {
                return res.json({
                  success: 0,
                  message: "Record Not Found"
                });
              }
              return res.json({
                success: 1,
                message: "product deleted successfully"
              });
            });
          },



          //delete one accessory
          deleteOneAccessory: (req, res) => {
            const id = req.params.accessoryId; 

            deleteOneAccessory(id, (err, results) => {
              if (err) {
                console.log(err);
                console.log(id);
                return;
              }
              if (!results) {
                return res.json({
                  success: 0,
                  message: "Record Not Found"
                });
              }
              return res.json({
                success: 1,
                message: "product deleted successfully"
              });
            });
          },



           //delete one skin care item
           deleteOneSkincare: (req, res) => {
            const id = req.params.skincareId; 

            deleteOneSkincare(id, (err, results) => {
              if (err) {
                console.log(err);
                console.log(id);
                return;
              }
              if (!results) {
                return res.json({
                  success: 0,
                  message: "Record Not Found"
                });
              }
              return res.json({
                success: 1,
                message: "product deleted successfully"
              });
            });
          },



          //update one food item
          updateOneFood: (req, res) => {
            const body=req.body;
            updateOneFood(body, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                message: "updated successfully"
              });
            });
          },



           //update one accessory
           updateOneAccessory: (req, res) => {
            const body=req.body;
            updateOneAccessory(body, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                message: "updated successfully"
              });
            });
          },


           //update one accessory
           updateOneSkincare: (req, res) => {
            const body=req.body;
            updateOneSkincare(body, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              return res.json({
                success: 1,
                message: "updated successfully"
              });
            });
          },


          //get all the food product details stored in the database
          getAllPets: (req, res) => {
            getAllPets((err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            return res.json({
              success: 1,
              data: results
            });
          });
        },


         //get details of one pet
         getOnePet: (req, res) => {
          const id = req.params.petId;
          
          getOnePet(id, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            if (!results) {
              
              return res.json({
                success: 0,
                message: "Record not Found",
              });
            }
            // results.password = undefined;

            return res.json({
              success: 1,
              data: results,
            });
            
          });
        },

         //update one accessory
         updateOnePet: (req, res) => {
          const body=req.body;
          updateOnePet(body, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            return res.json({
              success: 1,
              message: "updated successfully"
            });
          });
        },


          //delete product
          deleteOnePet: (req, res) => {
            const id = req.params.petId; 

            deleteOnePet(id, (err, results) => {
              if (err) {
                console.log(err);
                console.log(id);
                return;
              }
              if (!results) {
                return res.json({
                  success: 0,
                  message: "Record Not Found"
                });
              }
              return res.json({
                success: 1,
                message: "product deleted successfully"
              });
            });
          },
 }