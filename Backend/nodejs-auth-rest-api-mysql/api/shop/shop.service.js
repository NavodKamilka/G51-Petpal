

const pool = require("../../Connection/dbConnection");

module.exports = {
  //get details of all products
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


      //get details of one product
      getOneFood: (foodId, callBack) => {
        
        pool.query(
          `select foodId, brand, name, weight, pricePerOne, totalQty, availableQty from food where foodId = ?;`,
          [foodId],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
            
          }
        );
      },


      //insert details
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
}
