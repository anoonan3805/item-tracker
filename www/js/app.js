// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'RESTServices', 'ItemsList', 'angular.filter'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
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
          controller: 'landingCtrl',
          cache: false
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl'
        })
        .state('menu', {
          url: '/menu',
          templateUrl: 'templates/menu.html',
          controller: 'menuCtrl'
        })
        .state('cardView', {
          url: '/cardView',
          templateUrl: 'templates/cardView.html',
          controller: 'cardViewCtrl'
        })
        .state('locationView', {
          url: '/locationView',
          templateUrl: 'templates/locationView.html',
          controller: 'locationViewCtrl'
        })
        .state('addItem', {
          url: '/addItem',
          templateUrl: 'templates/addItem.html',
          controller: 'addItemCtrl',
          cache: false,
          resolve: {
            items: ['ItemsService', '$window',
                          function(ItemsService, $window) {
                            var locations =[];
                            return ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                            
                            
                            .then(function(res){
                            
                              for (var i = 0; i<res.data.length; i++){
                                 console.log(res.data[i].location);
                              locations.push({room: res.data[i].location});
                              //console.log (res.data[i]) 
                                
                              }
                              console.log(locations);
                              return locations;
                            });
                          }]
          }
        })
        .state('itemName', {
          url: '/itemName',
          templateUrl: 'templates/itemName.html',
          controller: 'itemNameCtrl',
          resolve: {
           items: ['ItemsService', '$window',
                        function(ItemsService, $window) {
                          return ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                  .then(function(res) {
                    return res.data;
                  }, function(error) {
                    if (error.status == 404) {
                      alert("The server has not found anything matching the Request-URI.");
                    }
                    else if (error.status == 500) {
                      alert("The world has ended, or the server just isn’t online. I'd keep my eyes peeled for zombies!");
                    }
                    else if (error.status == 401) {
                      alert("The request requires user authentication.");
                    }
                    else if (error.status == 503) {
                      alert("Server did not respond.");
                    }
                  });
                  
              }
            ]
          }
        })
        .state('itemPic', {
          url: '/itemPic',
          templateUrl: 'templates/itemPic.html',
          controller: 'itemPicCtrl',
          resolve: {
           items: ['ItemsService', '$window',
                        function(ItemsService, $window) {
                          return ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                  .then(function(res) {
                    return res.data;
                  }, function(error) {
                    if (error.status == 404) {
                      alert("The server has not found anything matching the Request-URI.");
                    }
                    else if (error.status == 500) {
                      alert("The world has ended, or the server just isn’t online. I'd keep my eyes peeled for zombies!");
                    }
                    else if (error.status == 401) {
                      alert("The request requires user authentication.");
                    }
                    else if (error.status == 503) {
                      alert("Server did not respond.");
                    }
                  });
                  
              }
            ]
          }
        })
        .state('itemLoc', {
          url: '/itemLoc',
          templateUrl: 'templates/itemLoc.html',
          controller: 'itemLocCtrl',
          resolve:{
            items: ['ItemsService', '$window',
                        function(ItemsService, $window) {
                          return ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                  .then(function(res) {
                    return res.data;
                  }, function(error) {
                    if (error.status == 404) {
                      alert("The server has not found anything matching the Request-URI.");
                    }
                    else if (error.status == 500) {
                      alert("The world has ended, or the server just isn’t online. I'd keep my eyes peeled for zombies!");
                    }
                    else if (error.status == 401) {
                      alert("The request requires user authentication.");
                    }
                    else if (error.status == 503) {
                      alert("Server did not respond.");
                    }
                  });
                  
              }
            ]
          }
        })
        .state('myItems', {
                    url: '/myItems',
                    templateUrl: 'templates/myItems.html',
                    controller: 'myItemsCtrl',
                    resolve: {
                      items: ['ItemsService', '$window',
                        function(ItemsService, $window) {
                          return ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                            .then(function(res) {
                              return res.data;
                            }, function(error) {

                              if (error.status == 404) {
                                alert("The server has not found anything matching the Request-URI.");
                              }
                              else if (error.status == 500) {
                                alert("The world has ended, or the server just isn’t online. I'd keep my eyes peeled for zombies!");
                              }
                              else if (error.status == 401) {
                                alert("The request requires user authentication.");
                              }
                              else if (error.status == 503) {
                                alert("Server did not respond.");
                              }

                            });
                        }
                      ]
                    }
                  });
        });