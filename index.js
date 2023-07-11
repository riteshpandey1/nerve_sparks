const express = require("express");
const app = express();

const { dbConnect } = require("./config/dbConfig");
dbConnect();

// app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const user = require("./routes/user_route");
const error = require("./middleware/error");
const dealer = require("./routes/dealership_route");
const login = require("./routes/login_route");
const cars = require("./routes/cars_route");
const deal = require("./routes/deal_route");
const sold_vehicle = require("./routes/sold_vehicles_route");
// middleware to set a routeAPI.....

app.use("/api/user-Data", user);
app.use("/api/dealership-Data", dealer);
app.use("/api/login", login);
app.use("/api/cars-Data", cars);
app.use("/api/deal-Data", deal);
app.use("/api/vehicle-Data", sold_vehicle);

app.use(error);

app.listen(8000, () => {
  console.log("server is listning");
});

