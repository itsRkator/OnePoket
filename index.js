const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("*", (req, res) => {
  try {
    res.send("Hello, World!\n");
  } catch (error) {
    console.error(`Error Occurred: ${error.message}`);
    throw new Error(`Error Occurred: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
