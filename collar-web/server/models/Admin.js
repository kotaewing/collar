const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
    employees: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
})

const Admin = model("Admin", adminSchema);

module.exports = Admin;