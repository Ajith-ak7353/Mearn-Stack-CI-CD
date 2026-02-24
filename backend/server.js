const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("❌ Cannot connect to the database!", err);
    process.exit(1);
  });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// Routes
require("./app/routes/tutorial.routes")(app);

// Set Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}.`);
});
