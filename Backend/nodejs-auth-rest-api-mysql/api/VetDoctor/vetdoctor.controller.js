// functions in services - getAllProducts

const {getAllArticles,
    getArticlesForAuthor,
    getVetReviews
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