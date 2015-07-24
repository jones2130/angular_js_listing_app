angular.module('listing.services', []).service('data', ['$http', function($http){
    "use strict";
    this.get = function(url, callback){
        $http({
            method: 'GET',
            url: url
        }).success(function(data, status, headers, config){
            callback(data);
        }).error(function(data, status, headers, config){
            throw "No data retured from " + url;
        });
    };
    
    this.post = function(url, callback, obj){
        $http({
            method: 'POST',
            url: url,
            data: obj
        }).success(function(data, status, headers, config){
            callback(data);
        }).error(function(data, status, headers, config){
            throw "No data retured from " + url;
        });
    };
}]);