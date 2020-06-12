'use strict';
const { Router } = require('express');
const router = new Router();
const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcryptjs');
const uploader = require('../config/uploader');

router.get('/', (req, res, next) => {
  User.find()
    .then((user) => {
      res.json({ user });
    })
    .catch((error) => next(error));
});

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    const posts = await Post.find({ userCreator: userId });
    const { _id, name, email, avatar } = user;

    return res.json({ _id, name, email, avatar, posts });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', uploader.single('avatar'), async (req, res) => {
  try {
    const user = { name: req.body.name };
    if (req.file) {
      user.avatar = req.file.path;
    }
    const userId = req.params.id;
    const newUser = await User.findByIdAndUpdate(userId, user);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
