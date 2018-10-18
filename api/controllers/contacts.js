const User = require('../models/user');


exports.update = (req, res) => {
  User.findOneAndUpdate({ _id: req.body.user._id }, (err, user) => {
    if (err) {
      res.json('summit went wrong');
    }
    user.set({ contacts: req.body.user.contacts });
    user.save((updateErr, userUpdated) => {
      if (updateErr) {
        res.json('could not update');
      }
      res.json(userUpdated);
    });
  })
    .then(user => {
      if (!user) {
        return res.sendStatus(404);
      }
      console.log('saved');
      res.json(user);
    });
};
