var app = angular.module("workout");

app.factory("idService", function(){
	var idData = {};
	return {
		getData: function(val){
			idData = val;
		},
		sendData: function(){
			return idData;
		}
	};
});