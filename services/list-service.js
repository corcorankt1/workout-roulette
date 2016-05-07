var app = angular.module("workout");

app.factory("listService", function(){
	var exerciseData = {};
	return {
		getData: function(val){
			exerciseData = val;
		},
		sendData: function(){
			return exerciseData;
		}
	};
});