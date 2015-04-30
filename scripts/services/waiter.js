app.factory('waiter', ['$timeout', function($timeout) {
  return {
    brieflySetSomething: function(target, property) {
      var oldValue = target[property];

      target[property] = true;

      $timeout(function() {
        target[property] = oldValue;
      }, 100);
    }
  };
}]);
