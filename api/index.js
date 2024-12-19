let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
const { connectDB } = require("./database/db");
const dotenv = require("dotenv");
const createError = require("http-errors");

dotenv.config();

// Express Route
const studentRoute = require("./routes/student.route");
const bookRoute = require("./routes/book.route");

// Connecting mongoDB Database
connectDB(process.env.DB_URL);

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/students", studentRoute);
app.use("/books", bookRoute);

// PORT
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
