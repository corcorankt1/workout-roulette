var app = angular.module("workout");

app.controller("listController", function($scope, listService, idService){
	var exercise = listService.sendData();
	var id = idService.sendData();
	var biceps = [];
	var shoulders = [];
	var core = [];
	var chest = [];
	var triceps = [];
	var calves = [];
	var glutes = [];
	var back = [];
	var quads = [];
	var array = [];
	exercise.forEach(function(elem){
		elem.muscles.forEach(function(el){
			switch(el){
				case 1:
				case 11:
				case 13:
					biceps.push({name: elem.name, description: elem.description})
					break;
				case 2:
					shoulders.push({name: elem.name, description: elem.description})
					break;
				case 3:
				case 6:
				case 14:
					core.push({name: elem.name, description: elem.description})
					break;
				case 4:
					chest.push({name: elem.name, description: elem.description})
					break;
				case 5:
					triceps.push({name: elem.name, description: elem.description})
					break;
				case 7:
				case 15:
					calves.push({name: elem.name, description: elem.description})
					break;
				case 8:
					glutes.push({name: elem.name, description: elem.description})
					break;
				case 9:
				case 12:
					biceps.push({name: elem.name, description: elem.description})
					break;
				case 10:
					quads.push({name: elem.name, description: elem.description})
					break;
				default:
					return exercise;
			}
		});
	});
	switch(id){
		case "bisLeft":
		case "bisRight":
			array = biceps
			break;
		case "chest":
			array = chest
			break;
		case "abs":
			array = core
			break;
		case "quadLeft":
		case "quadRight":
			array = quads
			break;
		case "shoulderLeft":
		case "shoulerRight":
			array = shoulders
			break;
		case "upper":
			array = back
			break;
		case "leftGlute":
		case "rightGlute":
		case "thighRight":
		case "thighLeft":
			array = glutes
			break;
		case "trisLeft":
		case "trisRight":
			array = triceps
			break;
		case "calfLeft":
		case "calfRight":
			array = calves
			break;
		default:
			array = exercise
	}
	console.log(array);
	var arr = []
	while(arr.length < 8){
  	var randomnumber=Math.ceil(Math.random()*array.length)
  	var found=false;
  	for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  	}
  	if(!found)arr[arr.length]=randomnumber;
	}
	$scope.exercise1 = array[arr[0]].name;
	$scope.exercise2 = array[arr[1]].name;
	$scope.exercise3 = array[arr[2]].name;
	$scope.exercise4 = array[arr[3]].name;
	$scope.exercise5 = array[arr[4]].name;
	$scope.exercise6 = array[arr[5]].name;
	$scope.exercise7 = array[arr[6]].name;
	$scope.exercise8 = array[arr[7]].name;

});