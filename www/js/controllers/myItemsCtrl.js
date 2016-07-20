angular.module('starter.controllers')
     .controller('myItemsCtrl', ['$scope', 'ItemsRest', '$http', 'items', '$state', 'ItemsService',
         function($scope, ItemsRest, $http, items, $state, ItemsService) {

$scope.items = items;



$scope.goToItem = function(item) {
    // var itemInfo = {
    //                 "name": item.name,
    //                 "pic": item.pic,
    //                 "description": item.description,
    //                 "location": item.location,
    //             };
                
                ItemsService.setInfo(item);
$state.go('nameView');
         
};
}]);