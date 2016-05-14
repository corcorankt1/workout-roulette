var app = angular.module("workout");

app.config(function($routeProvider){
	$routeProvider
	.when("/partial1",{
		controller: "listController",
		templateUrl: "partials/exercise-list.html"
	})
	.when("/partial2",{
		controller:"blankController",
		templateUrl: "partials/exercise-description.html"
	})
	.otherwise({redirectTo: "/"});
});