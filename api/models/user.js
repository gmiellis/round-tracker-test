const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const contactsSchema = new mongoose.Schema({
  type: mongoose.Schema.ObjectId,
  name: String,
});

const groupSchema = new mongoose.Schema({
  type: mongoose.Schema.ObjectId,
  groupName: String,
  members: [contactsSchema],
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: {
    type: String,
    set: password => bcrypt.hashSync(password, 10),
  },
  contacts: [contactsSchema],
  groups: [groupSchema],
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
