'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Link;

var linkSchema = Schema({
  linkName:{type: String, require: false },
  linkUrl:{type: String, require: false },
  linkCreatedAt:{type: Date, required: true, default: new Date()},
  tags:{type:Array, unique:true}

});


Link = mongoose.model('Link', linkSchema);

module.exports = Link;