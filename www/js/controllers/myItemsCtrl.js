angular.module('starter.controllers')
     .controller('myItemsCtrl', ['$scope', 'ItemsRest', '$http', 'items',
         function($scope, ItemsRest, $http, items) {

$scope.items = items;


         }]);