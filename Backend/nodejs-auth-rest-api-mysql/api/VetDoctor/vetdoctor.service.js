const pool = require("../../Connection/dbConnection");

module.exports = {
  //get all articles as a list
    getAllArticles: (callBack) => {
        pool.query(
          "SELECT * FROM article WHERE Flag = 1",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      getArticlesForAuthor: (callBack) => {
        pool.query(
          "SELECT * FROM article WHERE Flag = 1 AND AuthorID = 1",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      //insert food product details
//       create: (data,callBack) => {
//         pool.query(
//             `insert into food(brand, name, weight, pricePerOne, totalQty, availableQty, description) 
//             values(?,?,?,?,?,?,?)`,
//           [
//             data.brand,
//             data.foodName,
//             data.weight,
//             data.pricePerOne,
//             data.totalQty,
//             data.availableQty,
//             data.desc,
//           ],
//           (error, results, fields) => {
//             if (error) {
//               callBack(error);
//             }
//             return callBack(null, results);
//           }
//          );
//   },
//   updateOneAccessory: (data, callBack) => {
//     pool.query(
//       `update accessories set pricePerOne=?, totalQty=?, availableQty=? where accessoryId = ?`,
//       [
//         data.pricePerOne,
//         data.totalQty,
//         data.availableQty,
//         data.accessoryId
//       ],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },

}