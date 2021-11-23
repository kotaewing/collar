const { Schema } = require("mongoose");

const answerSchema = new Schema({
	questionId: {
        type: String, 
        required: true
    },
    answer: {
        type: String,
        required: false
    }

});

module.exports = answerSchema;