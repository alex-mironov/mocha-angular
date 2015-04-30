// var app = angular.module('app');

// angular.module('app')
window.app.controller('EditionCtrl', ['$scope', function($scope) {
    $scope.state = {toolbarVisible: true, documentSaved: true};
    $scope.document = {text: 'Some text'};

    $scope.$watch('document.text', function(value) {
      $scope.state.documentSaved = false;
    }, true);

    $scope.saveDocument = function() {
      $scope.sendHTTP($scope.document.text);
      $scope.state.documentSaved = true;
    };

    $scope.sendHTTP = function(content) {
      // payload creation, HTTP request, etc.
    };
  }]);
