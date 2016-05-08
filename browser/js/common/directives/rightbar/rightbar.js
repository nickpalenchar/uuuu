app.directive('rightbar', function (RandomGreetings, Sandbox) {

  return {
    restrict: 'EA',
    templateUrl: 'js/common/directives/rightbar/rightbar.html',
    link: function (scope) {
      scope.me = Sandbox.me;
    }
  };

});
