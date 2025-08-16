const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// temporary memory me profile store hoga
let profile = null;

// ✅ GET profile
app.get("/api/profile", (req, res) => {
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "No profile found" });
  }
});

// ✅ POST profile
app.post("/api/profile", (req, res) => {
  profile = req.body;
  res.json({ message: "Profile saved successfully", profile });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
