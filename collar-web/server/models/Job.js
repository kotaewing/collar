const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    form: {
        type: Schema.Types.ObjectId,
        ref: "Form"
    },
    jobNumber: {
        type: Number,
        required: true
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Job = model("Job", jobSchema);

module.exports = Job;