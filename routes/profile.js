const express = require("express");
const router = express.Router();

// temporary storage
let profile = null;

// GET
router.get("/", (req, res) => {
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "No profile found" });
  }
});

// POST
router.post("/", (req, res) => {
  profile = req.body;
  res.json({ message: "Profile saved successfully ✅", profile });
});

module.exports = router;
