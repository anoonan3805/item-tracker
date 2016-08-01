angular.module('starter.controllers')
    .controller('myItemsCtrl', ['$scope', 'ItemsRest', '$http', 'items', '$state', 'ItemsService','$window',
        function($scope, ItemsRest, $http, items, $state, ItemsService,$window) {

            
            $scope.items = items;

            $scope.goToItem = function(item) {

                ItemsService.setInfo(item);
                $state.go('cardView');

            };
        }
        
        // $scope.updateItemsList=function(){
            
        //     ItemsRest.update()
        //     .then (function(
        //         response){
        //             if (response.status == 200){
        //                 alert("The list was updated.");
                    
        //         }
        //     }, function(error){
        //         alert(JSON.stringify(error));
        //         return error;
        //     });
            
        //     $state.go('myItems');
            
        // };
    ]);