angular.module('starter.controllers')
    .controller('myItemsCtrl', ['$scope', 'ItemsRest', '$http', 'items', '$state', 'ItemsService',
        function($scope, ItemsRest, $http, items, $state, ItemsService) {

            $scope.items = items;

            $scope.goToItem = function(item) {

                ItemsService.setInfo(item);
                $state.go('cardView');

            };
        }
    ]);