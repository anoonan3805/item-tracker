angular.module('starter.controllers')
    .controller('nameViewCtrl', ['$scope', 'ItemsService', '$state',
        function($scope, ItemsService, $state) {
            
            $scope.showItem = ItemsService.getItem();
        }]);