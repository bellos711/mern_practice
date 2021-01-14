const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "{PATH} is required."],
			minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
		},

		age: {
			type: Number,
			required: [true, "{PATH} is required."],
			minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
		},

		email: {
			type: String,
			required: [true, "{PATH} is required."],
			minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
		}

	}, { timestamps: true } );

const User = mongoose.model("User", UserSchema);

module.exports = User;

