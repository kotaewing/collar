const { Schema } = require("mongoose");

const expenseSchema = new Schema({
	category: {
		type: String,
		required: true,
		trim: true,
	},
	cost: {
		type: Number,
		required: true,
		trim: true,
	},
	comment: {
		type: String,
		trim: true,
	},
	username: {
		type: String,
		required: true,
		trim: true,
	},

});

module.exports = expenseSchema;
