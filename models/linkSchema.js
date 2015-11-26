'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Link;

var linkSchema = Schema({
  linkName:{type: String, required: false },
  linkUrl:{type: String, required: false },
  linkCreatedAt:{type: Date, default: new Date()},
  tags: Array
});


Link = mongoose.model('Link', linkSchema);

module.exports = Link;