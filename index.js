const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const verifyToken = require('./helper/jwt');
const userRoutes = require("./routes/userRoutes");
const notesRoutes = require("./routes/notesRoutes")

const app = express();
const PORT = 5000;


// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/registerDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Frontend ka URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true,}
));
app.use(bodyParser.json());
app.use(express.json())

// Routes
app.use("/api", userRoutes);
// app.use("/api");

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

