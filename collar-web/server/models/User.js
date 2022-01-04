const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const locationSchema = require("./Location");

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		required: false,
		value: false
	},
	company: {
		type: Schema.Types.ObjectId,
		ref: "Company"
	},
	jobs: [
		{
			type: Schema.Types.ObjectId,
			ref: "Job"
		}
	],
	employeeId: {
		type: Number,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	location: [locationSchema]
});

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
