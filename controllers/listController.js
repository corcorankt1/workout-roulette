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
	console.log(biceps);
	console.log(shoulders);
	console.log(core);
	console.log(chest);
	console.log(triceps);
	console.log(calves);
	console.log(glutes);
	console.log(back);
	console.log(quads);
});