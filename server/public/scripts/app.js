var app = angular.module('computer',['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl:'pages/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl:'pages/about.html',
      controller: 'MainCtrl'
    })
    .when('/services', {
      templateUrl:'pages/services.html',
      controller: 'ServicesCtrl'
    })
    .when('/contact', {
      templateUrl:'pages/contact.html',
      controller: 'MainCtrl'
    })

});

app.controller('MainCtrl', ['$scope',function(scope){
console.log("this is main");

}]);

app.controller('ServicesCtrl', ['$scope', '$http',function($scope, $http){

$http.get('../data/services.json').then(function(res){
  console.log(res);
});

}]);
