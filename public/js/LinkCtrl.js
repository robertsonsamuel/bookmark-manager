'use strict';

var app = angular.module('app');

app.controller('LinkCtrl', function($scope, $state, $stateParams, $http) {
  $scope.bookmark = {};

  $http.get('http://localhost:3000/bookmarks/allLinks')
  .then(resp => {
    $scope.links = resp.data;
  });

  $scope.addNewBookmark = function(){
    $http.post('http://localhost:3000/bookmarks/newLink', $scope.bookmark)
    .then(resp => {
      console.log(resp);
    });
  };

  $scope.deleteLink = function(linkId){
    console.log(linkId);
    $http.delete('http://localhost:3000/bookmarks/deleteLink/'+ linkId)
    .then(resp => {
      console.log(resp);
    });
  }
});




