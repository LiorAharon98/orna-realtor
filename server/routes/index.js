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
module.exports = router;
