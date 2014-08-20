var app = angular.module( "app", ["controllers"]);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/one',{templateUrl:'one.htm',controller:'oneCtrl'})
      .when('/two',{templateUrl:'two.htm',controller:'twoCtrl'})
      .otherwise({redirectTo:"/one"});
  }
]);

var controllers = angular.module( "controllers" ,[]);

controllers.controller( "indexCtrl" ,
  function($scope){
    
  }
);
