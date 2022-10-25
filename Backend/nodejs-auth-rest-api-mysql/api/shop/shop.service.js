

const pool = require("../../Connection/dbConnection");
// const { insertPet } = require("./shop.controller");

module.exports = {
  //get details of all food products
    getProduct: (callBack) => {
        pool.query(
          "SELECT * FROM food",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      //get details of one food product
      getOneFood: (id, callBack) => {
        pool.query(
          `select foodId, brand, name, weight, pricePerOne, totalQty, availableQty, description from food where foodId = ?;`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
            
          }
        );
      },


      //insert food product details
      create: (data,callBack) => {
        pool.query(
            `insert into food(brand, name, weight, pricePerOne, totalQty, availableQty, description) 
            values(?,?,?,?,?,?,?)`,
          [
            data.brand,
            data.foodName,
            data.weight,
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            data.desc,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
         );
  },

      //insert pet details
      createPet: (data,callBack) => {
        pool.query(
            `insert into food(brand, name, weight, pricePerOne, totalQty, availableQty, description) 
            values(?,?,?,?,?,?,?)`,
          [
            data.brand,
            data.foodName,
            data.weight,
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            data.desc,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      //get details of all products
      getShopList: (callBack) => {
      pool.query(
        "SELECT * FROM shop",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

   

          //get details of all  accessories
      getAllAccessories: (callBack) => {
        pool.query(
          "SELECT * FROM accessories",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
},


        //get details of one food product
        getOneAccessory: (id, callBack) => {
          pool.query(
            `select accessoryId, name, pricePerOne, totalQty, availableQty, description from accessories where accessoryId = ?;`,
            [id],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
              
            }
          );
        },


         //get details of all  skincare
      getAllSkincare: (callBack) => {
        pool.query(
          "SELECT skincareId, brand, name, weight, pricePerOne, availableQty, lastUpdate, skincareImage FROM skincare",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

       //get details of one skincare product
      getOneSkincare: (id, callBack) => {
        pool.query(
          `select skincareId, brand, name, weight, pricePerOne, totalQty, availableQty, description from skincare where skincareId = ?;`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);  
          }
        );
      },

       //delete one food item 
      deleteOneFood : (id, callBack) => {
        pool.query(
          'DELETE FROM food WHERE foodId = ?', [id],
          (error, results,fields) => {
          if (error) {
            callBack(error) 
          }
          return callBack(null, results);  
        }
        );
      },


      //delete one accessory item 
      deleteOneAccessory : (id, callBack) => {
        pool.query(
          'DELETE FROM accessories WHERE accessoryId = ?', [id],
          (error, results,fields) => {
          if (error) {
            callBack(error) 
          }
          return callBack(null, results);  
        }
        );
      },


       //delete one skincare item 
       deleteOneSkincare : (id, callBack) => {
        pool.query(
          'DELETE FROM skincare WHERE skincareId = ?', [id],
          (error, results,fields) => {
          if (error) {
            callBack(error) 
          }
          return callBack(null, results);  
        }
        );
      },



      updateOneFood: (data, callBack) => {
        pool.query(
          `update food set pricePerOne=?, totalQty=?, availableQty=? where foodId = ?`,
          [
            // data.brand,
            // data.name,
            // data.weight,
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            // data.description,
            data.foodId
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },



      updateOneAccessory: (data, callBack) => {
        pool.query(
          `update accessories set pricePerOne=?, totalQty=?, availableQty=? where accessoryId = ?`,
          [
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            data.accessoryId
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      updateOneSkincare: (data, callBack) => {
        pool.query(
          `update skincare set pricePerOne=?, totalQty=?, availableQty=? where skincareId = ?`,
          [
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            data.skincareId
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      //get details of all food products
      getAllPets: (callBack) => {
      pool.query(
        "SELECT * FROM pets",
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
      },

        //insert one pet details
        insertPet: (data,callBack) => {
          pool.query(
              `insert into pets(petType, breed, pricePerOne, totalQty, availableQty, description) 
              values(?,?,?,?,?,?)`,
            [
              data.petType,
              data.breed,
              data.pricePerOne,
              data.totalQty,
              data.availableQty,
              data.desc,
            ],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
           );
      },
    

       //get details of one food product
       getOnePet: (id, callBack) => {
        pool.query(
          `select * from pets where petId = ?;`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
            
          }
        );
      },

      updateOnePet: (data, callBack) => {
        pool.query(
          `update pets set pricePerOne=?, totalQty=?, availableQty=? where petId = ?`,
          [
            data.pricePerOne,
            data.totalQty,
            data.availableQty,
            data.petId
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },



       //delete one food item 
       deleteOnePet : (id, callBack) => {
        pool.query(
          'DELETE FROM pets WHERE petId = ?', [id],
          (error, results,fields) => {
          if (error) {
            callBack(error) 
          }
          return callBack(null, results);  
        }
        );
      },
}
