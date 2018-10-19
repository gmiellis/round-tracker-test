const User = require('../models/user');


exports.update = (req, res) => {
  console.log(req.body);
  User.updateOne(
    { _id: req.body.user._id },
    { contacts: req.body.user.contacts },
    (err, user) => {
      if (err) {
        res.json('summit went wrong');
      }
      res.json(user.contacts);
    }
  );
};
