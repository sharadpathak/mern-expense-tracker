const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require('path');

dotenv.config({ path: "./config/config.env" });

const transaction = require("./routes/transaction");

const app = express();
connectDB();
app.use(express.json())
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use("/api/v1/transactions", transaction);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirName, 'client', 'build')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.blue
      .bold
  );
});
