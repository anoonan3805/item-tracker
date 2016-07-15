// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'ionic.ion.autoListDivider', 'RESTServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
  })
  .state('addItem', {
    url: '/addItem',
    templateUrl: 'templates/addItem.html',
    controller: 'addItemCtrl'
  })
  .state('itemName', {
    url: '/itemName',
    templateUrl: 'templates/itemName.html',
  })
  .state('itemPic', {
    url: '/itemPic',
    templateUrl: 'templates/itemPic.html',
    controller: 'itemPicCtrl',
  })
  .state('itemLoc', {
    url: '/itemLoc',
    templateUrl: 'templates/itemLoc.html',
    controller: 'itemLocCtrl'
  });
    

  });

  