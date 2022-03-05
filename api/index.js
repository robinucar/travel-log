const express = require("express");
const app = express();

const PORT = 5001

app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
