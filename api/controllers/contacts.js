const User = require('../models/user');

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.user._id },
    { contacts: req.body.user.contacts },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};
