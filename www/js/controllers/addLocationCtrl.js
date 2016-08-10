angular.module('starter.controllers')
    .controller('addLocationCtrl',['$scope','ItemsRest', '$window', 'items', function($scope, ItemsRest, $window, items) {

//Pulls locations(rooms) from the backend
        $scope.rooms = items;
        
        
        // Add a Item to the list
        $scope.roomName = {};

        $scope.addRoom = function() {

            $scope.rooms.push(
                $scope.roomName
            );

            // Clear input fields after push
            $scope.roomName = {};
};
    }]);