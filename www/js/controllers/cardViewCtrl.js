angular.module('starter.controllers')
    .controller('cardViewCtrl', ['$scope', 'ItemsService', '$state', 'ItemsRest', '$window', 'editItems', '$ionicModal',
        function($scope, ItemsService, $state, ItemsRest, $window, editItems, $ionicModal) {

            $scope.showItem = ItemsService.getItem();

            // $scope.editItem = ItemsService.editInfo();
            
            $ionicModal.fromTemplateUrl('templates/editItem.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function() {
                $scope.modal.show();
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });


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
           //Pulls locations(rooms) from the backend
        $scope.rooms = editItems;
        
        
        // Add a Item to the list
        $scope.roomName = {};

        $scope.addRoom = function() {

            $scope.rooms.push(
                $scope.roomName
            );

            // Clear input fields after push
            $scope.roomName = {};

        };
        
        $scope.items =[{
            name: '',
       
            pic:'',
        
            description:'',
        
            location: '',
        }];
        
        $scope.item = {};
        
        $scope.addItem=function(){
        $scope.item.userID = $window.localStorage.userID;
            $scope.items.push(
                $scope.item
            );
            ItemsRest.save($scope.item);
            
            
            //Clear input fields after push
            $scope.item = {};
            
        };
        $scope.item = {};
        $scope.editItem = function(){
            ItemsRest.edit()
            .then(function(response) {
                if(response.status == 200) {
                    response.data.userID = $window.localStorage.userID;
                    $scope.closeModal();
                }
            }, function (error) {
                alert(JSON.stringify(error));
                return error;
            
            });
        };    
            
        }]);