    // functions in services - getAllProducts

    const {getProduct, create, getOneFood, getShopList, deleteProduct, getAllAccessories, getOneAccessory, getAllSkincare, getOneSkincare} = require("./shop.service");



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

          //delete product
          deleteProduct: (req, res) => {
            const foodId = req.body; 
            deleteProduct(foodId, (err, results) => {
              if (err) {
                console.log(err);
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

          // deleteProduct : (request, response) => {
          //   const id = parseInt(request.params.id)
          
          //   pool.query('DELETE FROM food WHERE foodId = ?', [id], (error, results) => {
          //     if (error) {
          //       throw error
          //     }
          //     response.status(200).send(`User deleted with ID: ${id}`)
          //   })
          // }

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
 }