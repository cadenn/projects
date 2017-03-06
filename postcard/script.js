$(function() {

	var genre = {
		metal: [
		{
			// This is one option for metal
			artist: "Black Dahlia Murder",
			lyrics: "The undead are among us. At dawn they shrink back to their silken beds. They dance by night and drink the blood of a child's broken neck."
		},


		{
			// This is one option for metal
			artist: "Whitechapel",
			lyrics: "Your neck is smiling ear to fucking ear. The gurgling of gore. The sound of splitting. Hide. The grinding of the bones"
		},


		{
			// This is one option for metal
			artist: "Every Time I Die",
			lyrics: "All I want is for everyone to come to hell. there we can be free and learn to love ourselves."
		}
		], // End of Metal
		rap: [
		{
			//This is one option for rap
			artist: "Jay-Z",
			lyrics: "I sell ice in the winter, I sell fire in hell. I am a hustler baby. I’ll sell water to a well."
		},


		{
			//This is one option for rap
			artist: "50 Cent",
			lyrics: "I love you like a fat kid love cake."
		},


		{
			//This is one option for rap
			artist: "Nicki Minaj",
			lyrics: "I don't fuck with them chickens unless they last name is Cutlet"
		}
		], // End of Rap
		country: [
		{
			//This is one option for country
			artist: "Gretchen Wilson",
			lyrics: "'Cause I'm a redneck woman, I ain't no high class broad. I'm just a product of my raising, I say, 'hey ya'll' and 'yee-haw'"
		},


		{
			//This is one option for country
			artist: "Hank Williams",
			lyrics: "Into these last nine beers, I have shed a million tears. You are on my lonely mind. I'm gonna keep drinkin' until I'm petrified"
		},


		{
			//This is one option for country
			artist: "The Bellamy Brothers",
			lyrics: "Neighbor down the roads got a cow for sale. Twenty dollars more you get the horns and tail. Saturday night we're gonna go get drunk. Something in the road smells like a skunk."
		}
		] //end of country
	} // end of lyrics

	var timesOfDay = [
		{
			time: "dawn",
			color1: "rgba(255,145,35,0.4)" ,
			color2: "rgba(245,203,20,0.4)"
		},
		{
			time: "noon",
			color1: "rgba(91,199,237,0.4)",
			color2:"rgba(175,230,249,0.4)"
		},
		{
			time: "dusk",
			color1: "rgba(26,55,64,0.4)",
			color2: "rgba(149,104,104,0.4)"
		}
	];

	var scenery = [
		{
			scenery: "forest",
			sceneryClass: "forest"
		},
		{
			scenery: "mountain",
			sceneryClass: "mountain"
		},
		{
			scenery: "ocean",
			sceneryClass: "ocean"
		}
	];

	// PRELOAD IMAGES SECTION BEGINS
	function preloadImages() {
		var images = ['images/mountain1.jpg','images/ocean1.jpg','images/forest1.jpg'];
		images.forEach(function(image) {
			var preImg = new Image();
			preImg.onload = function() {};

			preImg.src = image;
		});
	}
	preloadImages();
	// PRELOAD IMAGES SECTION ENDS

	// FUNCTION CREATED TO RANDOMLY SELECT AN ITEM FROM THE ARRAY SET ABOVE. 
	var randomArrayNum = function(array){
		var max = array.length;
		return Math.floor(Math.random() * max);
	}
	// FUNCTION CREATED TO RANDOMLY SELECT AN ITEM FROM THE ARRAY SET ABOVE. 




// SUBMIT EVENT BEGINS
	$(".submit").on('click', function(event){
		event.preventDefault();


		// ****************************************
		// Start Section - Choosing Recipient
		// ****************************************
		var recipientName = $("#recipient").val();

		if(recipientName !== "") {
			$(".recipientName").text(recipientName);
		};

		// ****************************************
		// End Section - Choosing Recipient
		// ****************************************



		// ****************************************
		// Start Section - Choosing Sender
		// ****************************************
		var senderName = $("#sender").val();

		if(senderName !== "") {
			$(".senderName").text(senderName);
		};

		// ****************************************
		// End Section - Choosing Sender
		// ****************************************



		// ****************************************
		// Start Section - Choosing Scenery
		// ****************************************
		var userScenery = $("input[name=scenery]:checked").val();


		var pickedScene = scenery.filter(function(scene){
			return scene.scenery === userScenery;
		});

		$(".result__content").addClass(pickedScene[0].scenery);

		// ****************************************
		// End Section - Choosing Scenery
		// ****************************************



		// ****************************************
		// Start Section - Choosing Food Stamp
		// ****************************************

		var userFood = $("input[name=food]:checked").val();	
		//reference userFood to match the food property in the stamp array

		$(".stamp").attr("src",`images/stamp-${userFood}.png`);

		// ****************************************
		// End of Section - Choosing Food Stamp
		// ****************************************


		// ****************************************
		// Start Section - Choosing Time of Day
		// ****************************************
		var userTime = $("input[name=time]:checked").val();

		var timeGradient = timesOfDay.filter(function(timeOfDay){
			return timeOfDay.time === userTime;
		})

		$(".result__gradient").addClass(timeGradient[0].time);

		// ****************************************
		// End of Section - Choosing Time of Day
		// ****************************************


		// ****************************************
		// Start Section - Picking Random Song
		// ****************************************
		var userHobby = $("input[name=hobby]:checked").val();

		// Takes the users answer and selects the music genre. pickedGenre is an array.
		var pickedGenre = genre[userHobby];

		// Picks a random number to display a corresponding lyric
		var randomNum = randomArrayNum(pickedGenre);

		// The number output from randomNum, is going to align with one of the predeterminded lyrics, and store the entire object in randomSong
		var randomSong = pickedGenre[randomNum];

		// ****************************************
		// End Section - Picking Random Song
		// ****************************************

		$(".quiz").fadeOut(400, function(){
			$(".result").removeClass('display-none');
			
		});

		// ****************************************
		// Start Section - Setting Up The Postcard
		// ****************************************
		$(".result__card__lyrics p").text(randomSong.lyrics);


		console.log(``)
		// ****************************************
		// End Section - Setting Up The Postcard
		// ****************************************


		// ****************************************
		// End Section - Setting Up The Postcard
		// ****************************************
		$(".submit-container").on("click", function(){
			$('html, body').animate({ scrollTop: 0 }, 'fast');
		});
		
		// ****************************************
		// End Section - Setting Up The Postcard
		// ****************************************






		// ****************************************
		// Begin Section - Try Again Refresh
		// ****************************************

		$(".tryAgain").on("click", function(){
			window.location=""
		});

		// ****************************************
		// End Section - Try Again Refresh
		// ****************************************

	}); // SUBMIT EVENT ENDS





		// EASTER EGG BEGINS
		console.log("   _____                _           _   ____                         _                            ____             ");
		console.log("  / ____|              | |         | | |  _ \\       _       /\\      | |                   ___    |  _ \\            ");
		console.log(" | |     _ __ ___  __ _| |_ ___  __| | | |_) |_   _(_)     /  \\   __| | __ _ _ __ ___    ( _ )   | |_) | ___ _ __  ");
		console.log(" | |    | '__/ _ \\/ _` | __/ _ \\/ _` | |  _ <| | | |      / /\\ \\ / _` |/ _` | '_ ` _ \\   / _ \\/\\ |  _ < / _ \\ '_ \\ ");
		console.log(" | |____| | |  __/ (_| | ||  __/ (_| | | |_) | |_| |_    / ____ \\ (_| | (_| | | | | | | | (_>  < | |_) |  __/ | | |");
		console.log("  \\_____|_|  \\___|\\__,_|\\__\\___|\\__,_| |____/ \\__, (_)  /_/    \\_\\__,_|\\__,_|_| |_| |_|  \\___/\\/ |____/ \\___|_| |_|");
		console.log("                                               __/ |                                                               ");
		console.log("                                              |___/                                                                ");
		// EASTER EGG ENDS
});

