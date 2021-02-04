const mongoose = require("../database");

const MailSchema = new mongoose.Schema({
  html: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  downloads: {
    type: Number,
    default: 0,
  },
});

const Mail = mongoose.model("Mail", MailSchema);

module.exports = Mail;
