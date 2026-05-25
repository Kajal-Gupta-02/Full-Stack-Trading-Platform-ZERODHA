const mongoose = require("mongoose");
const bcryptjs  = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type:     String,
    required: [true, "Your email address is required"],
    unique:   true,
    lowercase: true,
    trim:     true,
  },
  username: {
    type:     String,
    required: [true, "Your username is required"],
    trim:     true,
  },
  password: {
    type:     String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type:    Date,
    default: Date.now,   // FIX: use function reference, not new Date() evaluated once at startup
  },
});

userSchema.pre("save", async function () {
  // Only hash if password was actually modified
  if (!this.isModified("password")) return;
  this.password = await bcryptjs.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
