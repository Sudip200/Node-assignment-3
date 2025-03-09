const express = require("express");
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(router);
app.use((req, res, next) => {
  res.render("error", { message: "404 Not found", redirect: "/" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
