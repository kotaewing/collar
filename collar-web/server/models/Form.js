const { Schema, model } = require("mongoose");
const questionSchema = require('./Question');
const answerSchema = require('./Answer');

const formSchema = new Schema({
    formId: {
        type: Number,
        required: true
    },
    questions: [questionSchema],
    answers: [answerSchema]
})

const Form = model("Form", formSchema);

module.exports = Form;