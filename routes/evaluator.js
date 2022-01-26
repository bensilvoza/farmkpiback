var express = require("express");
var router = express.Router();
var Form = require("../models/form");

router.get("/evaluator", async function (req, res) {
  var forms = await Form.find({});
  console.log(forms);
  res.json(forms);
});

router.post("/evaluator", async function (req, res) {
  var forms = req.body;

  for (var i = 0; i < forms.length; i++) {
    var sendForm = new Form({ form: forms[i] });
    await sendForm.save();
  }
  res.json("online");
});

router.get("/evaluator/:id", async function (req, res) {
  var form = await Form.findById(req.params.id);
  res.json(form);
});

router.post("/evaluator/edit/:formId", async function (req, res) {
  await Form.findByIdAndUpdate(req.params.formId, { form: req.body });
  res.json("Form updated");
});

// exports
module.exports = router;
