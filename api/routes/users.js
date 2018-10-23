const express = require('express');
const UsersController = require('../controllers/users');
const ContactsController = require('../controllers/contacts');
// const GroupsController = require('../controllers/groups');

const router = express.Router();

router.route('/')
  .post(UsersController.create)
  .get(UsersController.index)
  .put(ContactsController.update);
  // .put(GroupsController.update);

module.exports = router;
