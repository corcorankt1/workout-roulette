var app = angular.module("workout");

app.controller("listController", function($scope, listService){
	var exercise = listService.sendData();
	var biceps = [];
	var shoulders = [];
	var core = [];
	var chest = [];
	var triceps = [];
	var calves = [];
	var glutes = [];
	var back = [];
	var quads = [];
	exercise.forEach(function(elem){
		elem.muscles.forEach(function(el){
			if(el===1 || el===11 || el===13){
				biceps.push({name: elem.name, description: elem.description});
			} else if(el===2){
				shoulders.push({name: elem.name, description: elem.description});
			} else if(el===3 || el===6 || elem===14){
				core.push({name: elem.name, description: elem.description});
			} else if(el===4){
				chest.push({name: elem.name, description: elem.description});
			} else if(el===5){
				triceps.push({name: elem.name, description: elem.description});
			} else if(el===7 || el===15){
				calves.push({name: elem.name, description: elem.description});
			} else if(el===8){
				glutes.push({name: elem.name, description: elem.description});
			} else if(el===9 || el==12){
				back.push({name: elem.name, description: elem.description});
			} else if(el===10){
				quads.push({name: elem.name, description: elem.description});
			} else {
				return false;
			}
		});
	});

	var arr = []
	while(arr.length < 8){
  	var randomnumber=Math.ceil(Math.random()*biceps.length)
  	var found=false;
  	for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  	}
  	if(!found)arr[arr.length]=randomnumber;
	}
	console.log(arr);
	$scope.exercise1 = biceps[arr[0]].name;
	$scope.exercise2 = biceps[arr[1]].name;
	$scope.exercise3 = biceps[arr[2]].name;
	$scope.exercise4 = biceps[arr[3]].name;
	$scope.exercise5 = biceps[arr[4]].name;
	$scope.exercise6 = biceps[arr[5]].name;
	$scope.exercise7 = biceps[arr[6]].name;
	$scope.exercise8 = biceps[arr[7]].name;

});