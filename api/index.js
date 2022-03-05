const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const PORT = 5001;

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.API_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
