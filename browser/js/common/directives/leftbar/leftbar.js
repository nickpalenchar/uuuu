app.directive('leftbar', function (RandomGreetings) {

  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/leftbar/leftbar.html',
    link: function (scope) {
      scope.greeting = RandomGreetings.getRandomGreeting();
    }
  };

});
