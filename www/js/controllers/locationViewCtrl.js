angular.module('starter.controllers')
     .controller('locationViewCtrl', ['$scope', 'ItemsRest', '$http', 'ItemsService', '$state',
          function($scope, ItemsRest, $http, ItemsService, $state) {

               
               
               $scope.showItem = ItemsService.getItems();

            //   $scope.goToLoc = function(item) {

            //         ItemsService.getItems(item);
            //         $state.go('locationView');
            //   };
          }
     ]);