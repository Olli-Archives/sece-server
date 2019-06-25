const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  images: {
    type: Array,
    required: true
  }
});


module.exports = mongoose.model('InstaImage', imageSchema);