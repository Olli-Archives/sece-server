const { Router } = require('express');
const InstaImage = require('../models/InstaImage');

module.exports = Router()
  .post('/', (req, res, next) => {
    const images = req.body;
    InstaImage
    .create({images})
    .then(images=>res.send(images))
    .catch(next);
  })
  .get('/', (req, res, next) => {
    InstaImage
    .find()
    .lean()
    .then(images=>res.send(images))
    .catch(next);
  })
  
  ;
  