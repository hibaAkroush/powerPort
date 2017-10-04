angular.module('app', [
  'ngRoute'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider , ) {
  $routeProvider
      .when('/main', {
          templateUrl: 'views/main.html'
      })
      .when('/cityinfo', {
          templateUrl: 'views/cityinfo.html',
      })
      .when('/findcity', {
      	  templateUrl: 'views/findcity.html'
      })
      .when('/mobile', {
          templateUrl: 'views/mobile.html',
      })
      .otherwise({
          redirectTo: '/main'
      });
  }])
.component('index' , {
	templateUrl :`./templates/choose.html`
})
.controller('formCont', ['$scope' , function ($scope){
	$scope.generatore = [1,2,3,4,5,6,7,8,9,10]; // this array to generate data in option from 0-10
	$scope.find = function() {
	 	// get value from user  
		var security = document.getElementById('security').value;
		var cost = document.getElementById('cost').value;
		var wheater = document.getElementById('weather').value;

		$.ajax({ 
			type : 'POST',
			url : "http://127.0.0.1:3000/" ,
			data : {cost : cost, security : security, wheater : wheater} ,
			success : function(data) {
	  			window.cities = data;
			}
		})
		$scope.cities = window.cities;
	}
}])


