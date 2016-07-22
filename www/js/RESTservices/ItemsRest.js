/* global angular */
angular.module('RESTServices')
.service('ItemsRest', ['$http', '$window', function($http, $window){
    
    var ItemsRest = this;
    var apiUrl = 'https://item-tracker-anoonan3805.c9users.io/api/Items';
    ItemsRest.save = function(item){
        return $http ({
            url: apiUrl,
            method: 'POST',
            data: item,
            headers:{
                'Authorization': $window.localStorage.token
            }
        });
    
    };

    ItemsRest.get = function(token,userID){
        return $http ({
            url: 'https://item-tracker-anoonan3805.c9users.io/api/Items?filter[where][userID]=' + userID,
            method: 'GET',
            headers: { 
                'Authorization': token
            }
        });
    };
    
    ItemsRest.edit = function(item){
    return $http({
        url: 'https://item-tracker-anoonan3805.c9users.io/api/Items',
        method: 'PUT',
        headers: {
            'Authorization': $window.localStorage.token
        }
    });
        
    };
    
  ItemsRest.delete = function(item) {
  return $http({
      url: 'https://item-tracker-anoonan3805.c9users.io/api/Items',
      method: 'DELETE',
      headers: {
          'Authorization': $window.localStorage.token
      }
  });
  };
  }]);