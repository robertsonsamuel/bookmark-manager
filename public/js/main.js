'use strict';
var app = angular.module('app', ['ui.router', 'xeditable']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

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