angular.module('listing.module',['listing.services','listing.filters']).controller('listingCtrl', ['$scope', 'data', function($scope, data){
    "use strict"
    $scope.title = "Angular Listing App";
    $scope.viewLimit = 4;
    $scope.descending = true;
    $scope.filters = {
        query: "",
        tags: [
            {
                label:"Obama",
                selected:false
            },
            {
                label:"Smugglers",
                selected:false
            },
            {
                label:"Kenya",
                selected:false
            },
            {
                label:"Visit",
                selected:false
            },
            {
                label:"Chris Brown",
                selected:false
            },
            {
                label:"Theater",
                selected:false
            },
            {
                label:"NASA",
                selected:false
            }
        ]
    };
    $scope.setData = function(data){
        $scope.articles = data.articles;
    }
    
    $scope.viewMore = function(num){
        $scope.viewLimit += num;
    };
    
    data.get('data/listing_data.json', $scope.setData);
}]);