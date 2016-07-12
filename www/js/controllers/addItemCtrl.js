angular.module('starter.controllers', [])
.controller('addItemCtrl', ['$scope',
function($scope){
  
}]);

$scope.addRoom = function () {
      $scope.items[] = document.getElementById("newRoom").value;
  }