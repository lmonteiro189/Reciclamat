'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const uploader = require('../config/uploader.js');

const router = new Router();

router.post('/sign-up', uploader.single('avatar'), (req, res, next) => {
  const { name, email, password } = req.body;
  const avatar = req.file ? req.file.path : null;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        name,
        email,
        passwordHash: hash,
        avatar
      });
    })
    .then((user) => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then((result) => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res) => {
  req.session.destroy();
  res.json({});
});

router.get('/me', (req, res) => {
  res.json({
    user: req.user || null
  });
});

module.exports = router;
