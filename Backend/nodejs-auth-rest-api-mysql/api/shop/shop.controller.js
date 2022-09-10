    // functions in services - getAllProducts

    const {getProduct, create, getOneFood, getShopList, } = require("./shop.service");



    module.exports = {
      
        //get the product details stored in the database
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
            console.log(id);
            getOneFood(body.foodId, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              if (!results) {
                return res.json({
                  success: 0,
                  message: "Record not Found"
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

 }