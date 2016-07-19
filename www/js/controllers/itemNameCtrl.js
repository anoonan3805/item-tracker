angular.module('starter.controllers')
     .controller('itemNameCtrl', ['$scope', 'ItemsRest', '$http', 'items',
         function($scope, ItemsRest, $http, items) {

$scope.items = items;

// $scope.items = items === undefined ? [] : items;

         
            //  $scope.goToItem = function(item) {
            //   item.items;
            //      };
         }]);
         