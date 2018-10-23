const User = require('../models/user');

exports.update = (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(
    req.body.user._id,
    req.body.user,
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};
