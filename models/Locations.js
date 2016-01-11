'use strict';
const mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  locationDescription: String,
  building: String
});

mongoose.model('Location', LocationSchema);