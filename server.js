const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL).then((result) => {
	console.log();
});

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}`);
});
