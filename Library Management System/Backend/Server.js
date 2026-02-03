const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const  connectDB  = require("./Db/Database");

dotenv.config();
const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/admin", require("./Routes/adminRoutes"));
app.use("/api/user", require("./Routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Library API running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
