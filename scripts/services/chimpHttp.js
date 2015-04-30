app.factory('chimpHttp', ['$http', function($http) {
  return {
    sendMessage: function() {
      $http.post('http://chimps.org/messages', {message: 'Ook.'});
    }
  };
}]);
