app.factory('ajaxServer',['$http','$q',function($http,$q){
    return {
        getData:function(type,url){
            var df = $q.defer();
            $http({
                url:url,
                method:type
            }).then(function(data){
                df.resolve(data);
            });
            return df.promise;
        }
    }
}]);