const router = require("express").Router();
const UserModel = require("../model/userModel");
router.get("/admin", async (req, res) => {
  const allProperty = await UserModel.find({});
  res.json(allProperty);
});
router.post("/add-property", async (req, res) => {
  await UserModel.create(req.body);
  res.json(true);
});
router.put("/change-price", async (req, res) => {
  const user = await UserModel.findOneAndUpdate({ _id: req.body.id }, { price: req.body.inp }, { new: true });
  res.json(user);
});
router.put("/delete-property", async (req, res) => {
  const user = await UserModel.deleteOne({ _id: req.body.id }, { new: true });
  res.json(user);
});
module.exports = router;
