/* global angular */
angular.module('RESTServices')
.service('ItemsRest', ['$http', '$window', function($http, $window){
    
    var ItemsRest = this;
    var apiUrl = 'https://item-tracker-anoonan3805.c9users.io/api/itemName';
    ItemsRest.save = function(item){
        return $http ({
            url: apiUrl,
            method: 'POST',
            data: item,
            headers:{
                'Authorization': $window.localStorage.token
            }
        });
    
    }

    ItemsRest.get = function(token,userID){
        return $http ({
            url: 'https://item-tracker-anoonan3805.c9users.io/api/itemName?filter[where][userID]=' + userID,
            method: 'GET',
            headers:{
                'Authorization':token
            }
        });
    };
}]);
