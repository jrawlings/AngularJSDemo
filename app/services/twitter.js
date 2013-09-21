'use strict';

angular.module('openhouse').factory('Twitter', ['$rootScope', '$q', ($rootScope, $q) => {

  	const twitter = window.twitter = new Codebird();
	twitter.setConsumerKey(window.oauthConfig.consumerKey, window.oauthConfig.consumerSecret);
	twitter.setToken(window.oauthConfig.accessToken, window.oauthConfig.acesssSecret);

	// this call is proxied to api.jublo.net/codebird 
	// probably should use a read-only access level oauth app
	twitter.__call("oauth2_token", {}, reply => {
		twitter.setBearerToken(token);
	});

	return {
		'query' : (query) => {
			var deferred = $q.defer();

			twitter.__call("search_tweets", "q="+query, reply => {
		    	deferred.resolve(reply.statuses);
		    	// update angular's scopes
                 $rootScope.$$phase || $rootScope.$apply();
			}, true);

			return deferred.promise;
		}
	};
}]);