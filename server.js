const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const messageRoutes = require("./routes/messageRoutes");
app.use("/messages", messageRoutes);

app.get("/", (req, res) => {

  console.log("Root route hit");
  res.send("Backend is running 🚀");
});


// Start server
app.listen(3000, () => console.log("Server running on port 3000"));