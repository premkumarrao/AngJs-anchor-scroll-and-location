import angular from 'angular';

angular
  .module('plunker', [])
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    };
  });
