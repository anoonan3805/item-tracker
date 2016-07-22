angular.module('starter.controllers')
    .controller('cardViewCtrl', ['$scope', 'ItemsService', '$state', 'ItemsRest',
        function($scope, ItemsService, $state, ItemsRest) {
            
            $scope.showItem = ItemsService.getItem();
            
            $scope.editItem = ItemsService.editInfo();
            
            
            $scope.remove = function(item) {
            ItemsRest.delete($scope.user);
            $scope.user = {};
            }
        }]);