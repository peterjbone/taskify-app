const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, required: true },
	password: { type: String, required: true }
});
