const mongoose = require("mongoose");

// Create structure of data
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// Export model
module.exports = mongoose.model("Message", messageSchema);