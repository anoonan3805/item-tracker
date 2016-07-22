angular.module('ItemsList', [])
.service('ItemsService', ['ItemsRest', '$window', function(ItemsRest, $window) {
    var service = this;
    var itemInfo = {
        "name": "",
        "pic": "",
        "description": "",
        "location": "",
        "id": "",
    };
    
    service.saveItem = function(item) {
            item.userID = $window.localStorage.userID; 
            $window.localStorage.ItemID=item.id;
            ItemsRest.save(item);
        };
    
    service.getItems = function(token,userID) {
        return ItemsRest.get(token,userID);
    };
    
    service.setInfo = function(answers) {
            $window.localStorage.ItemID = answers.id;
            itemInfo = answers;
        };
        
        service.getItem = function(){
            return itemInfo;
        };
        
        service.editInfo = function() {
         return itemInfo;
        };
}]);