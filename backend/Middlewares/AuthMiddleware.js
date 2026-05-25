require("dotenv").config();
const jwt  = require("jsonwebtoken");
const User = require("../model/UserModel");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }
    try {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      return res.json({ status: false });
    } catch {
      return res.json({ status: false });
    }
  });
};
