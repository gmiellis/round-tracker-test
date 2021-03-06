const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const { auth, users } = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/users', users);
app.use('/contacts', users);
app.use('/groups', users);
app.use('/existingGroups2', users);

mongoose.connect(process.env.DATABASE_CONN, () => {
  console.log('connected to database');
  app.listen(8080, () => {
    console.log('server listening on http://127.0.0.1:8080');
  });
});
