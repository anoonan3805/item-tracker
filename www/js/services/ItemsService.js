angular.module('ItemsList', [])
.service('ItemsService', ['ItemsRest', function(ItemsRest) {
    var service = this;
    
    service.getItems = function() {
        return ItemsRest.get();
    };
}]);