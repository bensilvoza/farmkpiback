var express = require("express");
var router = express.Router();
var Register = require("../models/register");

// login
router.get("/login", async function (req, res) {});

// login
router.post("/login", async function (req, res) {});

// create account
router.get("/register", async function (req, res) {
  var data = await Register.find({});
  res.json(data);
});

// create account
router.post("/register", async function (req, res) {
  var data = new Register({
    fname: req.body.fname,
    lname: req.body.lname,
    role: req.body.role,
    email: req.body.email,
    password: undefined,
  });
  await data.save();
  res.json("Data Added");
});

// update account
router.post("/register/update", async function (req, res) {
  //var updatedData = {fname:req.body.fname, lname:req.body.lname, role:req.body.role, email:req.body.email, password:req.body.password}
  //await data.save()

  var data = await Register.findById(req.body._id);
  data["password"] = req.body.password;
  console.log(data);

  var check = await Register.findByIdAndUpdate(data["_id"], data);
  console.log(check);
  res.json("Registered");
});

// administrator side edit
router.post("/register/edit/:userId", async function (req, res) {
  var updatedUser = await Register.findByIdAndUpdate(
    req.params.userId,
    req.body
  );
  res.json("Updated");
});

router.get("/register/:userId", async function (req, res) {
  var data = await Register.findById(req.params.userId);
  res.json(data);
});

// logout
router.get("/logout", function (req, res) {});

// exports
module.exports = router;
