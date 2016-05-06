var app = angular.module("workout");

app.directive("exercise", function(){
	return {
		restrict: "AE",
		template: "<p>{{exercise}}</p>",
		replace: false
	}
});