angular.module('starter.controllers')
    .controller('cardViewCtrl', ['$scope', 'ItemsService', '$state',
        function($scope, ItemsService, $state) {
            
            $scope.showItem = ItemsService.getItem();
        }]);