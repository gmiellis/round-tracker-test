const User = require('../models/user');

exports.update = (req, res) => {
  // console.log(req.body);
  User.findByIdAndUpdate(
    req.body.user._id,
    { contacts: req.body.user.contacts, groups: req.body.user.groups },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};
