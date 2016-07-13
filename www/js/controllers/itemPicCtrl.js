/*global angular*/
angular.module('starter.controllers')

/*.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    })*/

 .controller('itemPicCtrl', function($scope, $cordovaImagePicker, $ionicPlatform) {
 
 $scope.getImageSaveContact = function() {       
        // Image picker will load images according to these settings
    var options = {
        maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
        width: 800,
        height: 800,
        quality: 80            // Higher is better
    };
 
    $cordovaImagePicker.getPictures(options).then(function (results) {
                // Loop through acquired images
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);   // Print image URI
        }
    }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
    });
};  
 
});
