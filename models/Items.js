'use strict';
const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  casNumber: String,
  chemicalName: String,
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  amount: Number,
  units: String,
  barcode: String,
  moreComing: Boolean
});

mongoose.model('Item', ItemSchema);