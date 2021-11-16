const { Schema } = require('mongoose');

const imageSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        url: {
            type: String,
            required: true,
            trim: true
        },
        alt: {
            type: String,
            required: true,
            trim: true
        }
    }
);

module.exports = imageSchema;