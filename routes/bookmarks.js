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

router.delete('/deleteLink/:id', function(req, res) {
  var linkId = req.params.id;
  Link.find({ _id : linkId }).remove().exec();
  res.send();
});

router.put('/updateName/:id', function(req, res) {
  var linkId = req.params.id;
  console.log(req.body.linkName);
  Link.findByIdAndUpdate(linkId, {$set: { linkName: req.body.linkName}}, function(err, link){
    link.save();
    res.send(link);
  });
});

router.put('/updateUrl/:id', function(req, res) {
  var linkId = req.params.id;
  console.log(req.body.linkUrl);
  Link.findByIdAndUpdate(linkId, {$set: { linkUrl: req.body.linkUrl}}, function(err, link){
    link.save();
    res.send(link);
  });
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