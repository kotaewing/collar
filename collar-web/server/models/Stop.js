const { Schema } = require('mongoose');

const stopSchema = new Schema(
    {
        lat: {
            type: String,
            required: true,
            trim: true
        },
        lon: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        }
    }
);

module.exports = stopSchema;