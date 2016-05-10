var app = angular.module("workout");

app.config(function($routeProvider){
	$routeProvider
	.when("/partial1",{
		controller: "listController",
		templateUrl: "partials/exercise-list.html"
	})
	.otherwise({redirectTo: "/"});
});