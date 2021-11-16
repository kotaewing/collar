const { Schema, model } = require("mongoose");

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    address: {
        type: String,
        required: true
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    businessNumber: {
        type: Number,
        required: true
    },
})

const Company = model("Company", companySchema);

module.exports = Company;