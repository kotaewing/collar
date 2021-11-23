const { Schema } = require('mongoose');

const locationSchema = new Schema(
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
        }
    }
);

module.exports = locationSchema;