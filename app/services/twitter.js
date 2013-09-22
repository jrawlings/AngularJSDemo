angular.module('openhouse').factory('Twitter', ['$rootScope', '$q', function ($rootScope, $q) {

    'use strict';

    var twitter = new Codebird();
    twitter.setConsumerKey(oauthConfig.consumerKey, oauthConfig.consumerSecret);
    twitter.setToken(oauthConfig.accessToken, oauthConfig.acesssSecret);

    return {
        'query' : function (query) {
            var deferred = $q.defer();

            twitter.__call("search_tweets", "q="+query, function (reply) {
                deferred.resolve(reply.statuses);
                // update angular's scopes
                 $rootScope.$$phase || $rootScope.$apply();
            }, true);

            return deferred.promise;
        }
    };
}]);