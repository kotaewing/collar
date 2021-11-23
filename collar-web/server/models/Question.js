const { Schema } = require("mongoose");

const questionSchema = new Schema({
	question: {
		type: String,
		required: true
	},
	questionType: {
		type: String,
		required: true
	},
	questionId: {
		type: String,
		required: true
	}

});

module.exports = questionSchema;