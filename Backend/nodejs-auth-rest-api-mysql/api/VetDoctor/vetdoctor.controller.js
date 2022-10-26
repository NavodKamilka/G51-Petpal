// functions in services - getAllProducts

const {getAllArticles,
    getArticlesForAuthor,
    getArticlesForAuthorTwo,
    getVetReviews,
    getPendingArticles,
    getDoctorList,
    deleteTime,
    getSelected
    } = require("./vetdoctor.service");

module.exports = {
        //get all the articles as list written by all authors stored in the database
        getAllArticles: (req, res) => {
            getAllArticles((err, results) => {
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

          //get all the articles as list written by selected authors stored in the database
        getArticlesForAuthor: (req, res) => {
            getArticlesForAuthor((err, results) => {
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
          getArticlesForAuthorTwo: (req, res) => {
            getArticlesForAuthorTwo((err, results) => {
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

           //get all the reviews about doctor
        getVetReviews: (req, res) => {
          getVetReviews((err, results) => {
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
        getPendingArticles: (req, res) => {
          getPendingArticles((err, results) => {
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
        getDoctorList: (req, res) => {
          getDoctorList((err, results) => {
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
//delete product
deleteTime: (req, res) => {
  const id = req.params.id; 
console.log("controller awa");
  deleteTime(id, (err, results) => {
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
getSelected: (req, res) => {
  const id = req.params.AppointmentID;
  
  getSelected(id, (err, results) => {
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
            //  insertPet: (req, res) => {
            //     console.log("hello");
            //     const body = req.body;
            //     create(body, (err, results) => {
            //       if (err) {
            //         console.log(err);
            //         return res.status(500).json({
            //           success: 0,
            //           message: "Database connection error"
            //         });
            //       }
            //       return res.status(200).json({
            //         success: 1,
            //         data: results
            //       });
            //     });
            //   },
    
          //update one accessory
        //   updateOneAccessory: (req, res) => {
        //     const body=req.body;
        //     updateOneAccessory(body, (err, results) => {
        //       if (err) {
        //         console.log(err);
        //         return;
        //       }
        //       return res.json({
        //         success: 1,
        //         message: "updated successfully"
        //       });
        //     });
        //   },



}