const { Schema, model } = require("mongoose");
const stopSchema = require("./Stop");
const expenseSchema = require("./Expense");
const imageSchema = require("./Image");

const roadtripSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	start: {
		type: String,
		trim: true,
	},
	destination: {
		type: String,
		trim: true,
	},
	playlist: {
		type: String,
		trim: true,
	},
	images: [imageSchema],
	expenses: [expenseSchema],
	stops: [stopSchema],
	users: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const Roadtrip = model("Roadtrip", roadtripSchema);

module.exports = Roadtrip;
