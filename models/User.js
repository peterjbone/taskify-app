const mongoose = require("mongoose");
const { Schema, models } = mongoose;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, required: true },
	password: { type: String, required: true }
});

const User = models.User || mongoose.model("User", userSchema);
