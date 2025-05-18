const mongoose = require("mongoose");
const { Schema, models } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, required: true },
	password: { type: String, required: true }
});

userSchema.pre("save", async function (next) {
	const user = this;
	if (!user.isModified) return next();
	let salt = await bcrypt.genSalt(10);
});

const User = models.User || mongoose.model("User", userSchema);
