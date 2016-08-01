angular.module('starter.controllers')
    .controller('cardViewCtrl', ['$scope', 'ItemsService', '$state', 'ItemsRest', '$window',
        function($scope, ItemsService, $state, ItemsRest, $window) {

            $scope.showItem = ItemsService.getItem();

            $scope.editItem = ItemsService.editInfo();


            $scope.deleteItem = function() {

                ItemsRest.delete()
                    .then(function(
                        response) {
                        if (response.status == 200) {
                            ItemsService.getItems($window.localStorage.token, $window.localStorage.userID)
                            .then(function(response) {
                            if(response.status == 200) {
                                $scope.items = response.data;
                            }
                            
                            },
                            function(error){
                                return error;
                            });
                            alert("The item was deleted.");
                            $state.go($state.current, {}, {reload:true});
                            $state.go('myItems',{},{reload:true});


                        }
                    }, function(error) {
                        alert(JSON.stringify(error));
                        return error;
                    });

            };
        }
    ]);