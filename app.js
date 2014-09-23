var app = angular.module( "app", ["ngRoute","controllers"]);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/one',{templateUrl:'one.htm',controller:'oneCtrl'})
      .when('/two',{templateUrl:'two.htm',controller:'twoCtrl'})
      .when('/mce',{templateUrl:'mce.html',controller:'mceCtrl'})
      .otherwise({redirectTo:"/one"});
  }
]);

var controllers = angular.module( "controllers" ,[]);

controllers.controller( "indexCtrl" ,
  function($scope){

  }
);

controllers.controller( "oneCtrl" ,
  function($scope){

  }
);

controllers.controller( "twoCtrl" ,
  function($scope){

  }
);

controllers.controller( "mceCtrl" ,
  function($scope){

    $scope.data = {text:"abc"};

    var mce_script = document.querySelector("script#mce");

    var mceInit = function(){
      tinyMCE.init({selector:"textarea"});
      tinyMCE.get("mce_textarea").on("change",function(e){
        console.log(arguments);
        $scope.data.text = e.target.getContent();
      });
    }

    if( mce_script ){
      mceInit();
    }else{
       var s = document.createElement('script'); // use global document since Angular's $document is weak
       s.id = "mce_script";
       s.src = '//tinymce.cachefly.net/4.0/tinymce.min.js';
       s.addEventListener("load", mceInit );
       document.head.appendChild(s);
    }

  }
);
