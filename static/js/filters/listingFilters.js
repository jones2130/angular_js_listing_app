angular.module('listing.filters', []).filter('newsFilter', function(){
    return function(items, filters){
        var filtered = [];
        
        angular.forEach(items, function(item){
            if(filters.query == ""
               || item.title.toLowerCase().indexOf(filters.query.toLowerCase()) != -1
               || item.description.toLowerCase().indexOf(filters.query.toLowerCase()) != -1)
            {
                var flag = true;
                
                angular.forEach(filters.tags, function(filterTag){
                    if(filterTag.selected && item.tags.indexOf(filterTag.label) == -1)
                    {
                        flag = false;
                    }
                });
                
                if(flag)
                {
                    filtered.push(item);
                }
            }
        });
        
        return filtered;
    }
});