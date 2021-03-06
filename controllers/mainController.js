var app = angular.module("workout");

app.controller("mainController", function($http, listService, idService, $scope){
	var exercises = [];
	$http({
		method: "GET",
		url: "https://wger.de/api/v2/exercise/?format=json"
	}).then(function(response){
		var results = response.data.results;
		results.forEach(function(elem){
			if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
				exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
			};
		});
		}),
		function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=2"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=3"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=4"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};		
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=5"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=6"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};	
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=7"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=8"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=9"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=10"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=11"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=12"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=13"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=14"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=15"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=16"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=17"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
	}),
	function(response){
		console.log("Fail");
	};
	$http({
	method: "GET",
	url: "https://wger.de/api/v2/exercise/?format=json&page=18"
	}).then(function(response){
	var results = response.data.results;
	results.forEach(function(elem){
		if(elem.language === 2 && elem.description !== null && elem.muscles.length >0){
			exercises.push({name: elem.name, muscles: elem.muscles, description: elem.description});
		};
	});
		console.log(exercises);
		listService.getData(exercises);
	}),
	function(response){
		console.log("Fail");
	};
	$http({
		method: "GET",
		url: "http://quotes.rest/qod.json"
	}).then(function(response){
		console.log(response);
		$scope.quote = response.data.contents.quotes[0].quote;
	}),
	function(response){
		console.log("Fail");
	};
	$(".roulette").click(function(){
		var id = [];
		$(".selected").each(function(){
			id.push($(this).attr("id"));
		});
		console.log(id);
		idService.getData(id);
	});
});

