const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const fileRoutes = require('./routes/file-upload-routes');


require("dotenv").config();

//initialize app
const app = express();
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const uri = process.env.DATABASE;
//db
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERR", err));




app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);



//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));
