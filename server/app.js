  const express = require('express');
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");
  const cors = require('cors');
  require('dotenv').config();



  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.json());
  app.use(cookieParser());
  

app.use(cors());


  //Route import kiya
  const websiteRoute = require("./Routes/websiteRoute")

  app.use("/api/v1/", websiteRoute);





  module.exports = app;
