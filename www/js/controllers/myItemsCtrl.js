angular.module('starter.controllers')
     .controller('myItemsCtrl', ['$scope', 'ItemsRest', '$http', 'items',
         function($scope, ItemsRest, $http, items) {

$scope.items = items;

$scope.goToItem = function(item) {
    // var info = {
    //                 "name": item.name,
    //                 "pic": item.pic,
    //                 "description": item.description,
    //                 "location": item.location,
                };

         }]);