var app = angular.module("app", [])

app.controller("MainCtrl", function($scope){
  $scope.title = "Usuallee"
  $scope.image = "usuallee1.jpg"
  $scope.mainDescription = "Usuallee is a startup I co-founded in 2010. As VP of Product of Usuallee I lead al the products effort and initiatives. I also supported the operational and financial tasks that helped us to raise $200K to develop the main app concept, user experience, logic and initial traction"
  $scope.roles = "test"
  $scope.achievements = "test"
  $scope.url = "https://whoisjuan.github.io"

});