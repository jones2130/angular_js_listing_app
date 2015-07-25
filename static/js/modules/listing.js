angular.module('listing.module',['listing.services','listing.filters']).controller('listingCtrl', ['$scope', 'data', function($scope, data){
    "use strict"
    $scope.title = "Angular Listing App";
    $scope.viewLimit = 4;
    $scope.descending = true;
    $scope.filters = {
        query: ""
    };
    $scope.setData = function(data){
        $scope.articles = data.articles;
    }
    
    $scope.viewMore = function(num){
        $scope.viewLimit += num;
    };
    
    data.get('data/get/rss', $scope.setData);
}]);