var app = angular.module("workout");

app.controller("listController", function($scope, listService, idService){
	var exercise = listService.sendData();
	var id = idService.sendData();
	console.log(id);
	var biceps = [];
	var shoulders = [];
	var core = [];
	var chest = [];
	var triceps = [];
	var calves = [];
	var glutes = [];
	var quads = [];
	var array = [];
	var back = [
	{
		name: "Deadlift",
		description: "Stand with feet hip-width apart and bend your hips back. Your grip should be just outside of your knees. Keeping a flat black, extend your hips to stand up, and pull the bar up along your body until lock-out, as your hips drive through and your shoulders move back. While pulling, keep your eyes on the ground a few feet in front of you. Carefully lower the bar back to the starting position."
	},
	{
		name: "Weighted Pullup",
		description: "Attach a weighted belt to your waist, hold a dumbbell between your feet, or—if you can’t complete your reps with weight—use body weight alone. Hang from a pullup bar with your hands just outside shoulder width. Pull yourself up until your chin is over the bar."
	},
	{	name: "Dubmbell Romanian Lift",
		description: "Grasp two dumbbells and hold them with feet set hip-width apart. Keeping your lower back in its natural arch, bend hips back, your torso forward, and lower yourself until you feel a stretch in your hamstrings. You may bend at the knees. Squeeze your glutes at the top of the movement after coming back up."
	},
	{
		name: "Pallof Press Iso Hold",
		description: "Attach a single-grip handle to a cable pulley and set it at about shoulder height. (You can also use a band.) Grasp the handle with one hand over the other and step away from the machine to put tension on the cable; turn to your left 90 degrees so your right side faces the machine. Stand with feet shoulder-width apart and extend your arms in front of you. The cable will try to twist your body toward it—resist."
	},
	{
		name: "Incline Dubmbell Row",
		description: "Set an adjustable bench to a 30- to 45-degree incline and lie on it chest-down. Grasp a dumbbell in each hand and draw your shoulder blades back and together as you row the weights to your sides."
	},
	{
		name: "Chinup",
		description: "Hang from a chinup bar with hands shoulder-width apart using a supinated grip (so, palms facing you). From the bottom of the movement, pull yourself up until your chin is over the bar."
	},
	{
		name: "Trap-Bar Deadlift",
		description: "Use a trap bar and stand with feet at hip-width apart. Bend your hips back and grasp the handles. Keeping your lower back in its natural arch, drive through your heels to stand up straight and extend your hips and knees."
	},
	{
		name: "Alternating Dubmbell Row",
		description: "Bend forward at the hips as you do in the Romanian deadlift, and row one dumbbell to your side. Lower it and repeat on the other side."
	},
	{
		name: "Inverted Row",
		description: "Set a barbell in a power rack (or use a Smith machine) at about hip height. (About four rungs up should work). Lie underneath it and grab it with hands about shoulder-width apart with the bottom of your heels on floor. Hang from the bar so your body forms a straight line. Squeeze your shoulder blades together and pull yourself up until your back is fully contracted."
	},
	{
		name: "Snatch-Grip Rack Deadlift",
		description: "Set up as you would to deadlift, only do so in a power rack, resting the bar on the safety rods at about two inches below your knees. Grasp the bar wide, hands about double shoulder width. Extend your hips and stand up, pulling the bar to in front of your thighs."
	},
	{
		name: "Swiss Ball Leg Curl",
		description: "Lie on your back on the floor and rest your heels on a Swiss ball. Brace your abs, keeping your core in a plank position, and drive your heels into the ball to raise your hips off the floor. Bend your knees and roll the ball toward you. Keep your hips elevated the entire set."
	},
	{
		name: "Wide-Grip Pullup",
		description: "Grab a pullup bar with an overhand grip, wider than outside shoulder width. Hang from the bar and then pull yourself up until your chin is over it."
	},
	{
		name: "Landmine One-Arm Row",
		description: "Place the end of the bar into a corner. (Wrap towels around the end of the bar, or put padding the corner, to avoid damaging the wall and floor.) Facing away from the corner, hold the barbell at the opposite end, above where you load the weights, with your right hand. Stand so your left leg is forward. Keeping your lower back flat, bend at the hips until your torso is slightly above parallel with  the floor. Draw your shoulder blade back and row the bar to your ribs."
	},
	{
		name: "Towel Cable Row",
		description: "Hook a towel to a cable pulley and stand in front of it. Set up to do a row, holding an end of the towel in each hand. Squeeze your shoulder blades together and row the towel to your rib cage."
	},
	{
		name: "Rotational Inverted Row",
		description: "You'll need a suspension trainer for this exercise. Hold the handles and lean back with arms extended so that your body is supported by the suspension trainer and only your feet are on the floor. Brace your core and hold your body in a straight line. (The lower you set the handles, the harder the exercise; you can elevate your feet to make it even harder.) Start with your palms facing your feet, and as you row your body up, twist your wrists outward so that your palms face up in the top position."
	},
	{
		name: "Blurpee",
		description: "Stand with feet outside shoulder-width apart. Next, bend down into a squat position and place your hands on the floor. Now quickly thrust your legs behind, you so you end up at the top of a pushup position. Bring your legs back up so they land outside your hands, and then jump up quickly. That's one rep."
	},
	{
		name: "Pike-Up to Superman",
		description: "Get into pushup position with your toes on the ball. Bend your hips and roll the ball toward you so your torso becomes vertical. Roll back so your body is straight again and extend your spine, then roll the ball up your legs so your body forms a straight line with arms extended overhead but hands still on the floor. You should look like Superman flying downward. That’s one rep. Pull with your lats to return to the pushup position and begin the next rep."
	},
	{
		name: "Lying Lateral Raise",
		description: "Set an adjustable bench to a 30-degree incline and lie on it chest-down with a dumbbell in each hand. Squeeze your shoulder blades together and raise your arms out 90 degrees to your sides so your palms face down in the top position."
	},
	{
		name: "Hang Clean",
		description: "Start by holding the bar against your body with your hands at shoulder-width on the bar. Keeping your back in its natural curve, bend your hips and knees (as you would in a squat), lowering the bar to just above your knees. Explosively extend your hips as if jumping, while at the same time shrugging your shoulders and pulling the bar straight up in front of your torso. As the bar reaches chest level, bend your elbows and flip your wrists to catch the bar at shoulder level. In this stance, your palms should face the ceiling, and your shoulders should be pointing foward. Make sure at this stage that your back is straight, and that the bar is at your center of gravity. Bend your hips and knees as you catch the bar to absorb the impact."
	}
	];
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
  	var randomnumber=Math.floor(Math.random()*array.length)
  	var found=false;
  	for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  	}
  	if(!found)arr[arr.length]=randomnumber;
	}
	$scope.exercise1 = array[arr[0]].name;
	$scope.description1 = array[arr[0]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise2 = array[arr[1]].name;
	$scope.description2 = array[arr[1]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise3 = array[arr[2]].name;
	$scope.description3 = array[arr[2]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise4 = array[arr[3]].name;
	$scope.description4 = array[arr[3]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise5 = array[arr[4]].name;
	$scope.description5 = array[arr[4]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise6 = array[arr[5]].name;
	$scope.description6 = array[arr[5]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise7 = array[arr[6]].name;
	$scope.description7 = array[arr[6]].description.replace(/(<([^>]+)>)/ig,"");
	$scope.exercise8 = array[arr[7]].name;
	$scope.description8 = array[arr[7]].description.replace(/(<([^>]+)>)/ig,"");
	$(".restart").click(function(){
		$(".glyphicon").removeClass("selected");
});

});