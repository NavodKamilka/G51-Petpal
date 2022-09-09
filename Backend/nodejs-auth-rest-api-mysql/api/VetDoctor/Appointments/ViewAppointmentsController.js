const express = require("express");
const router = express.Router();
const db = require("../../../Connection/dbConnection");

// used to create a async db call
const util = require("util");
const asyncDB = util.promisify(db.query).bind(db);

router.get("/ViewAppointments", async (req, res) => {
  try {
    var result = await asyncDB(
      "select * from doctor_appointments da join appointments a on da.AppointmentID = a.AppointmentID where DoctorID = ? and status = ?",
      [1, "0"]
    );

    await Promise.all(
      result.map(async (r) => {
        var ownerDetails = await getOwnerDetails(r.OwnerID);
        r.OwnerDetails = ownerDetails[0];
        var petDetails = await getPetDetails(r.PetID);
        r.PetDetails = petDetails[0];

        //   remove unwanted details
        delete r.PetID;
        delete r.OwnerID;
        delete r.DoctorID;
      })
    );

    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

async function getOwnerDetails(ownerID) {
  try {
    return await asyncDB("select * from pet_owner where OwnerID = ?", [
      ownerID,
    ]);
  } catch (e) {
    return e;
  }
}

async function getPetDetails(petID) {
  try {
    return await asyncDB(
      "select pp.Name,pp.DOB,pp.PetBreed,pp.Gender,pp.RegisteredDate,pp.PetPicture,pp.VaccinationCardPic,pp.SellStatus,pp.Flag,pc.Name as PetCatogory , bg.Name as BloodGroup,nc.Name as PetCategory from pet_profile pp join pet_categories pc on pp.PetTypeID=pc.TypeID join blood_groups bg on pp.BloodGrp = bg.BloodGrpID join notice_categories nc on bg.PetTypeID = nc.CategoryID where pp.PetID = ? ",
      [petID]
    );
  } catch (e) {
    return e;
  }
}

module.exports = router;
