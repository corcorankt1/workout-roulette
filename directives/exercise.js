var app = angular.module("workout");

app.directive("restart", function(){
	return {
		restrict: "AE",
		template: "<a href='#/partial2' class='restart'>Go again!</a>",
		replace: false
	}
});