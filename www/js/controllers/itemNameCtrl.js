angular.module('starter.controllers')
     .controller('itemNameCtrl', ['$scope', 'ItemsRest', '$http', 'items', 'ItemsService', '$state',
         function($scope, ItemsRest, $http, items, ItemsService, $state) {

$scope.items = items;

 $scope.goToItem = function(item) {

                ItemsService.setInfo(item);
                $state.go('cardView');

            };


         }]);
         