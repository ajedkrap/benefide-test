const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require("http");
const os = require("os");
require('dotenv').config();

const app = express();
const { APP_PORT } = process.env;
const server = http.createServer(app);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/employees", require("./src/routes/employee"))
app.use("/api", require("./src/routes/others"))

app.get("/", (_, res) => {
  res.status(200).send({
    status: true,
    message: "Backend is Running"
  })
});

server.listen(APP_PORT, (err) => {
  if (err) {
    throw err;
  }
  const network = os.networkInterfaces()
  console.log(`IP address: ${network.en0[1].address}`)
  console.log("Express app listening on port " + APP_PORT)
});