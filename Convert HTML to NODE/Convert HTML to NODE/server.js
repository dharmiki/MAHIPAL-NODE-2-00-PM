const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve static files (css, js, images)
app.use(express.static(path.join(__dirname, "public")));

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
