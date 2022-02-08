const express = require("express");
const app = express();

const path = require("path");

// app.get("/home", (rep, res) => {
//   res.sendFile(path.join(__dirname, "Component", "home.html"));
// });

// app.get("/contact", (rep, res) => {
//   res.sendFile(path.join(__dirname, "Component", "Contact.html"));
// });

app.use(express.static("Component"));

app.listen(5000, (err) =>
  err ? console.log(err) : console.log("server is running")
);
