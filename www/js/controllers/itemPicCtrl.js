/*global angular*/

angular.module('starter.controllers')
    .controller('itemPicCtrl', ['$scope', 'ItemsRest', '$http', 'items', 'ItemsService', '$state',
        function($scope, ItemsRest, $http, items, ItemsService, $state) {

            $scope.items = items;

            $scope.goToItem = function(item) {

                ItemsService.setInfo(item);
                $state.go('cardView');

            };
        }
    ]);
















// angular.module('starter.controllers')

//  .controller('itemPicCtrl', function($scope, $cordovaImagePicker, $ionicPlatform) {
 
  /*$scope.collection = {
        selectedImage : ''
    };
 
    $ionicPlatform.ready(function() {
 
 */
//  $scope.getImageSaveContact = function() {       
//         // Image picker will load images according to these settings
//     var options = {
//         maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
//         width: 800,
//         height: 800,
//         quality: 80            // Higher is better
//     };
 
//     $cordovaImagePicker.getPictures(options).then(function (results) {
//                 // Loop through acquired images
//         for (var i = 0; i < results.length; i++) {
//             console.log('Image URI: ' + results[i]);   // Print image URI
//         }
//     }, function(error) {
//         console.log('Error: ' + JSON.stringify(error));    // In case of error
//     });
// };  
 
// });
