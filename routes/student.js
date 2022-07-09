const express = require("express");
const { Student } = require("../models/student");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    let _b = req.body;
    let student = await Student.create({
      name: _b.name,
      age: _b.age,
      class: _b.class,
      schoolName: _b.schoolName,
      fatherName: _b.fatherName,
      phoneNumber: _b.phoneNumber,
    });
    res.status(200).json({ succes: true, data: student });
  } catch (error) {
    res.status(400).json({ success: false, Error: error });
  }
});

//list All students(admin)
router.post("/list", async (req, res) => {
  try {
    const _b = req.body;

    if (!_b.email || !_b.password) {
      res
        .status(400)
        .json({ succes: true, message: "email and password is required!" });
    }

    if (_b.email == "rahulsinha5324@gmail.com" && _b.password == "rahul5324") {
      let student = await Student.find();
      res.status(200).json({ succes: true, data: student });
    } else {
      res
        .status(400)
        .json({ succes: true, message: "email Or password is incorrect!" });
    }
  } catch (error) {
    res.status(400).json({ success: false, Error: error });
  }
});

//anyone can see students
router.get("/get", async (req, res) => {
    try {
      const _b = req.body;

        let student = await Student.find();
        res.status(200).json({ succes: true, data: student });

    } catch (error) {
      res.status(400).json({ success: false, Error: error });
    }
  });

module.exports = router;
