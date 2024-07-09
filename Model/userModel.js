const mongoose = require('mongoose');


const Account = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password : {
        type: String,
    },
  },
  {
    timestamp: true,
  }
);


const User = mongoose.model("Account", Account);

module.exports = User;
