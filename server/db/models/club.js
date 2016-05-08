'use strict';

var mongoose = require('mongoose');

var Discussion = new mongoose.schema({
  subject: String,
  page: Number,
  meta: Boolean,
  thread: []
});

var Club = new mongoose.Schema({
  name: String,
  url: String,
  currentBook: String,
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' }
});

mongoose.model('Discussion', Discussion);
mongoose.model('Club', Club);
