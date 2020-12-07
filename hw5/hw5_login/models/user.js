const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    account: { type: String, required: true },
    password: { type: String, required: true },
});
const exportSchema = mongoose.model("User", userSchema);

module.exports = exportSchema;
