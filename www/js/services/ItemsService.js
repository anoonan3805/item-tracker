angular.module('ItemsList', [])
.service('ItemsService', ['ItemsRest', '$window', function(ItemsRest, $window) {
    var service = this;
    var itemInfo = {
        "name": "",
        "pic": "",
        "description": "",
        "location": "",
    };
    
    service.saveItem = function(item) {
            item.userID = $window.localStorage.userID; 
            ItemsRest.save(item);
        };
    
    service.getItems = function(token,userID) {
        return ItemsRest.get(token,userID);
    };
    
    service.setInfo = function(answers) {
            itemInfo = answers;
        };
        
        service.getItem = function(){
            return itemInfo;
        }
}]);