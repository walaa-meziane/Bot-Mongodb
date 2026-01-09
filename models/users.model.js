const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  telegramID: {
    type: Number,       
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    default: null,
  },
  coins: {
    type: Number,
    default: 0,
  }
});

const users = mongoose.model('users', userSchema);

module.exports = users;
