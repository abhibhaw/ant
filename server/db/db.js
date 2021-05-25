require("dotenv").config();
const mongoose = require("mongoose");
const Scheduler = require("../cron/subscriptionCron");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully Connected to Database");
    Scheduler();
  });
