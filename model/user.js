const mongoose = require("mongoose");
const validator = require('validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "please enter a valid email."]
  },
  date_of_birth: {
    type: Date,
    required: true,
    validate: {
        validator: function(value) {
            const today = new Date()
            if(value >= today) return false
        },
         message: "pls enter a valid date of birth"
    }
  },
  Month: Number,
  Day: Number,
});

UserSchema.index({ Month: 1, Day: 1 });

UserSchema.pre("save", function (next) {
  if (this.date_of_birth) {
    this.Month = this.date_of_birth.getMonth() + 1,
    this.Day = this.date_of_birth.getDate();
  }
  next()
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
