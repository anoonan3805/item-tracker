angular.module('starter.controllers')
    .controller('addItemCtrl',['$scope','ItemsRest', '$window', function($scope, ItemsRest, $window) {

//  function readURL(input) {
//             if (input.files && input.files[0]) {
//                 var reader = new FileReader();

//                 reader.onload = function (e) {
//                     $('#blah')
//                         .attr('src', e.target.result)
//                         .width(150)
//                         .height(200);
//                 };

//                 reader.readAsDataURL(input.files[0]);
//             }
//         }

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
        $scope.item.userID = $window.localStorage.userID;
            $scope.items.push(
                $scope.item
            );
            ItemsRest.save($scope.item);
            
            
            //Clear input fields after push
            $scope.item = {};
            
        };
        
        
        
    }]);