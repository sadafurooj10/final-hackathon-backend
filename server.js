const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ MongoDB Connection
mongoose.connect(
  "mongodb+srv://sadafurooj00:ma9VfzFxGcPzkwkS@cluster01.pdbop5w.mongodb.net/finalHackathonDB?retryWrites=true&w=majority&appName=Cluster01",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => {
  console.error("❌ MongoDB connection error:");
  console.error(err); // 👈 pura error print hoga
});

// ✅ Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
