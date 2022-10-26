const pool = require("../../Connection/dbConnection");

module.exports = {
  //get all articles as a list
    getAllArticles: (callBack) => {
        pool.query(
          "SELECT article.Title,article.DatePublished,article.Likes,article.Link,veterinary_doctor.FirstName,veterinary_doctor.LastName FROM article INNER JOIN veterinary_doctor ON article.AuthorID=veterinary_doctor.DocID WHERE Flag = 1",
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
      getArticlesForAuthorTwo: (callBack) => {
        pool.query(
          "SELECT * FROM article WHERE Flag = 1 AND AuthorID = 2",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getPendingArticles: (callBack) => {
        pool.query(
          "SELECT * FROM article WHERE Flag = 0 AND AuthorID = 1",
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getVetReviews: (callBack) => {
        pool.query(
          "SELECT review_on_doctors.Date, pet_owner.FirstName,pet_owner.LastName,review_on_doctors.Content FROM review_on_doctors INNER JOIN pet_owner ON review_on_doctors.PublisherID=pet_owner.OwnerID WHERE DoctorID=1" ,
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getDoctorList: (callBack) => {
        pool.query(
          "SELECT * FROM veterinary_doctor" ,
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      }, //delete one food item 
      deleteTime : (id, callBack) => {
       pool.query(
         'DELETE FROM time_slot_doctors WHERE ID = ?', [id],
         (error, results,fields) => {
         if (error) {
           callBack(error) 
         }
         return callBack(null, results);  
       }
       );
     },
     getSelected: (id, callBack) => {
      pool.query(
        `select Description,Prescription From appointments where AppointmentID= ?;`,
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