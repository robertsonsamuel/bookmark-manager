'use strict';
var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/link")

  $stateProvider
  .state('/', {
    url: "/link",
    templateUrl: '../partials/link.html',
    controller: "LinkCtrl"
  })
});



// {
//   "linkName":"Facebook",
//   "linkUrl": "www.facebook.com",
//   "tags": [
//     "chat",
//     "socialMedia",
//     "blajhfdhf",
//     "fdakfjhekj",
//     "chat"
//   ]
// }