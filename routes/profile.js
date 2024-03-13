'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userModelSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  mbti: { type: String },
  enneagram: { type: String },
  variant: { type: String },
  tritype: { type: Number },
  socionics: { type: String },
  sloan: { type: String },
  psyche: { type: String },
  image: { type: String }
});

const UserModel = mongoose.model('User', userModelSchema);

// Init Data for Profile with ID 1
const profiles = new UserModel({
  "id": 1,
  "name": "A Martinez",
  "description": "Adolph Larrue Martinez III.",
  "mbti": "ISFJ",
  "enneagram": "9w3",
  "variant": "sp/so",
  "tritype": 725,
  "socionics": "SEE",
  "sloan": "RCOEN",
  "psyche": "FEVL",
  "image": "https://picsum.photos/300/300",
});

profiles.save().then(function () {
  console.log(`Init Data Successfully!`)
});

module.exports = function () {
  router.get('/profile/:id', async function (req, res, next) {
    const id = req.params.id;
   
    const profile = await UserModel.findOne({ id: parseInt(id) });

    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    
    res.render('profile_template', {
      profile: profile,
    });
  });

  router.get('/create', function (req, res, next) {
    res.render('profile_create');
  });

  router.post('/create', async function (req, res, next) {
    const lastId = await UserModel.findOne({}).sort({ id: -1 }) // get last id
    console.log(lastId)
    const newProfile = new UserModel({
      "id": lastId.id+1,
      "name": req.body.name,
      "description": req.body.description,
      "mbti": req.body.mbti,
      "enneagram": req.body.enneagram,
      "variant": req.body.variant,
      "tritype": req.body.tritype,
      "socionics": req.body.socionics,
      "sloan": req.body.sloan,
      "psyche": req.body.psyche,
      "image": "https://picsum.photos/300/300",
    });
   
    newProfile.save().then(function () {
      console.log(`Data Successfully Created!`)
    });

    res.redirect(`/profile/${newProfile.id}`);
  });

  return router;
}

