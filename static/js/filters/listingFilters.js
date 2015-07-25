angular.module('listing.filters', []).filter('newsFilter', function(){
    return function(items, filters){
        var filtered = [];
        
        angular.forEach(items, function(item){
            if(filters.query == ""
               || item.title.toLowerCase().indexOf(filters.query.toLowerCase()) != -1
               || item.description.toLowerCase().indexOf(filters.query.toLowerCase()) != -1)
            {
                filtered.push(item);
            }
        });
        
        return filtered;
    }
});