

const pool = require("../../Connection/dbConnection");

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

// delete a porduct
// deleteProduct: (foodId, callBack) => {
//       pool.query(
//         `delete from food where foodId = ?`,
//         [foodId],
//         (error, results, fields) => {
//           if (error) {
//             callBack(error);
//           }
//           return callBack(null, results[0]);
//         }
//       );
//     }

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


         //get details of all  accessories
      getAllSkincare: (callBack) => {
        pool.query(
          "SELECT brand, name, weight, pricePerOne, availableQty, lastUpdate FROM skincare",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}
