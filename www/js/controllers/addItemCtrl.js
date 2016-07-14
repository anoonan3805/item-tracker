angular.module('starter.controllers')
    .controller('addItemCtrl', function($scope) {


        $scope.rooms = [{
            room: "Garage"
        }, {
            room: "Attic"
        }, {
            room: "Basement"
        }];
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
        
            $scope.items.push(
                $scope.item
            );
            
            //Clear input fields after push
            $scope.item = {};
            
        };
        
    });