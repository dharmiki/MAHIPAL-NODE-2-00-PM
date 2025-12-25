const express = require("express");
const port = 5000;
const app = express();

require("./Config/db");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./Routes/route"));

app.listen(port, () => {
    console.log("Server running on port " + port);
});
