

const pool = require("../../../Connection/dbConnection");

module.exports = {
    //insert doctor details
    create: (data,callBack) => {
      pool.query(
          `insert into doctors_in_clinics(brand, name, weight, pricePerOne, totalQty, availableQty, description) 
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
