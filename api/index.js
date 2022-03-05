const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

mongoose.connect(process.env.API_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const PORT = 5001

app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
