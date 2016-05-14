var app = angular.module("workout");

app.directive("exercise", function(){
	return {
		restrict: "AE",
		template: "<a href='#' class='restart'>Go again!</a>",
		replace: false
	}
});