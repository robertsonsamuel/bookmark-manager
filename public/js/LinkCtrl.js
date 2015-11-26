'use strict';

var app = angular.module('app');

app.controller('LinkCtrl', function($scope, $state, $stateParams, $http) {
  $scope.bookmark = {};

  $http.get('http://localhost:3000/bookmarks/allLinks')
  .then(resp => {
    $scope.links = resp.data;
  });

  $scope.addNewBookmark = function(){
    var Bookmark = {}
    Bookmark.tags = $scope.bookmark.tags.split(',');
    Bookmark.linkName = $scope.bookmark.linkName;
    Bookmark.linkUrl = $scope.bookmark.linkUrl;
    console.log(Bookmark);
    $http.post('http://localhost:3000/bookmarks/newLink', Bookmark)
    .then(resp => {
      $http.get('http://localhost:3000/bookmarks/allLinks')
      .then(resp => {
        $scope.links = resp.data;
      });
    });
  };

  $scope.deleteLink = function(linkId){
    console.log(linkId);
    $http.delete('http://localhost:3000/bookmarks/deleteLink/'+ linkId)
    .then(resp => {
      $http.get('http://localhost:3000/bookmarks/allLinks')
      .then(resp => {
        $scope.links = resp.data;
      });
    });
  }

  $scope.updateName = function(data, linkId) {
    $http.put('http://localhost:3000/bookmarks/updateName/' + linkId, {linkName:data})
    .then(resp => {
    });
  };

  $scope.updateUrl = function(data, linkId) {
    console.log(data);
    $http.put('http://localhost:3000/bookmarks/updateUrl/' + linkId, {linkUrl:data})
    .then(resp => {
    });
  };
});




