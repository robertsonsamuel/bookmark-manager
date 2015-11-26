'use strict';

var express = require('express');
var router = express.Router();
var Link = require('../models/linkSchema');
var async = require("async");
var _ = require('lodash');

//  1. save tags 
// 2. save link
// 3. save tags to link
// 4. save link to tags

// outside is link
// next is tags
// save tags -> save links
// push tags into links
// push links into tags 



router.post('/newLink', function(req, res) {
  req.body.tags = _.uniq(req.body.tags);
  console.log(req.body, 'incoming body');
  var link = new Link (req.body);
   // tags.forEach(function  (tag) {
   //    link.tags.push(tag);
   //  });
   console.log(link,"link before save");
  link.save( function(err, savedLink){
     res.send(savedLink);
  });  
});



router.get('/allLinks', function(req, res) {
  Link.find({}, function(err, links) {
    res.status(err ? 400 : 200).send(err || links);
  }).populate('tags');
});





// router.put('/:linkId/addTag/:tagId', function(req, res) {
//   Link.findById(req.params.linkId, function(err, link){
//     if(err) return res.status(400).send(err.message);
//     Tag.findById(req.params.tagId, function(err, tag){
//       if(err) return res.status(400).send(err.message);
//       console.log(link);
//       if(link.tags.indexOf(tag._id) !== -1) {
//         return res.status(400).send('tag already in link');
//       }

//       link.tags.push(tag._id);
//       link.save(function(err){
//         res.status(err ? 400 : 200).send(err ? 'tag add failed' : 'tag added');
//       });
//     });
//   });
// });

module.exports = router;