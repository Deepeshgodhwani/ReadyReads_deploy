const express = require("express");
const app = express();
const PORT = 7001;
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());


// ------------------------Deployment---------------

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
});

//------------------------Deployment-----------

app.listen(PORT, function (err) {
  if (err) {
    console.log("error in running server", PORT);
  } else {
    console.log("server is running succefully on port:", PORT);
  }
});
