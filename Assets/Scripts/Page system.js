//Jquery

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready( function(){
=======
$(window).ready( function(){
>>>>>>> parent of f919251... Fix 2
	console.log("Page has loaded");
=======
=======
>>>>>>> parent of 005ca3d... Visuals update
$(window).on("load", function(){
	console.log("Page has loaded");
	
<<<<<<< HEAD
>>>>>>> parent of f59e795... Added button images
	$(".pageLoadingscreen").fadeOut("slow", 0);
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

$(document).ready(function() {
	
	$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
	
	setTimeout(function() {
		$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
	}, 3000);
	
	$('input[type="range" i].youtubeMusicVolumeSlider').change(function() {
		
		player.setVolume($(this).val());
		
	});
	
	$('button.switchYoutubeMusicPanel').on("click", function() {
		
		$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
		
		$(this).fadeTo("fast", 0.5, function() {
			$(this).fadeTo("fast", 1);
			
		});
		
	});
	
	$('button.nextYoutubeMusicTrack').on("click", function() {
		
		player.nextVideo();
		
	});
	
	$('button.previousYoutubeMusicTrack').on("click", function() {
		
		player.previousVideo();
		
	});
	
	$('button.startYoutubeMusicTrack').on("click", function() {
		
		if (player.getPlayerState() != 1 && player.getPlayerState() != 3) {
			
			player.playVideo();
			
		} else {
			
			player.pauseVideo();
			
		}
		
	});
	
>>>>>>> parent of 2b6a5c1... Music player updates/fixes
});

>>>>>>> parent of 46db1f1... Music player update
=======

//Youtube
var usingYoutubePlayer = true;
var player; //If using youtube player.

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video", {
	height: '390',
	width: '640',
	videoId: 'PLgvkpXZcWJIW5xBPwAGLw28mT78YDf-iE',
	events: {
	  'onReady': onPlayerReady,
	  //'onStateChange': onPlayerStateChange
	}
  });
}

function onPlayerReady() {
<<<<<<< HEAD
	player.setVolume(1);
	player.setShuffle(true);
}
>>>>>>> parent of 2acaea5... Big music player overhaul!
=======
	
	//Sets the volume to 1 (not bothersome).
	player.setVolume(1);
	//Shuffles playlist.
	player.setShuffle(true); //Sets the youtube setting for shuffled playlists on for this playlist.
	//Randomizes first video.
	var firstVideoInIndex = Math.random() * player.getPlaylist().length; //Get video playlist length.
	firstVideoInIndex = firstVideoInIndex.toFixed(0); //Rounds the random value. (which is a float)
	player.playVideoAt(firstVideoInIndex); //Sets the playlist index but also starts playing it (look below).
	player.stopVideo(); //Stops the video immediately to make sure no data will be used for no reason.
	
<<<<<<< HEAD
	$('input[type="range" i].youtubeMusicVolumeSlider').val(player.getVolume() / 100);
}
>>>>>>> parent of 2b6a5c1... Music player updates/fixes
=======
});

$(document).ready(function() {
	
	$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
	switchMusicPanelSwitchText();
	
	var hidePanel = setTimeout(function() {
		if (!$("div.youtubeMusicPanel").hasClass("youtubeMusicPanelActive")) {
			return;
		} //Stops the function in this timeOut method if the youtube music panel isn't active.
		$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
		switchMusicPanelSwitchText();
	}, 3000);
	
	$('input[type="range" i].youtubeMusicVolumeSlider').mousemove(function() {
		
		clearInterval(hidePanel);
		player.setVolume($(this).val());
		
	});
	
	$('button.switchYoutubeMusicPanel').on("click", function() {
		
		clearInterval(hidePanel);
		$("div.youtubeMusicPanel").toggleClass("youtubeMusicPanelActive");
		
		switchMusicPanelSwitchText();
		
		$(this).fadeTo("fast", 0.5, function() {

			$(this).fadeTo("fast", 1);
			
		});
		
	});
	
	$('button.nextYoutubeMusicTrack').on("click", function() {
		
		startYoutubeRainbowBorders();
		clearInterval(hidePanel);
		player.nextVideo();
		$('button.startYoutubeMusicTrack').text("Pause");
		
	});
	
	$('button.previousYoutubeMusicTrack').on("click", function() {
		
		startYoutubeRainbowBorders();
		clearInterval(hidePanel);
		player.previousVideo();
		$('button.startYoutubeMusicTrack').text("Pause");
		
	});
	
	$('button.startYoutubeMusicTrack').on("click", function() {
		
		clearInterval(hidePanel);
		startYoutubeRainbowBorders();
		
		if (player.getPlayerState() != 1 && player.getPlayerState() != 3) {
			
			$(this).text("Pause");
			player.playVideo();
			
		} else {
			
			$(this).text("Play");
			player.pauseVideo();
			clearInterval(rainbowFrame);
			$("div.youtubeMusicPanel").css({"border": "1px solid hsl(0, 100%,100%)", "border-left": "2px"});
			
		}
		
	});
	
});

//Youtube
var usingYoutubePlayer = true;
var player; //If using youtube player.

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video", {
	height: '390',
	width: '640',
	videoId: 'PLgvkpXZcWJIW5xBPwAGLw28mT78YDf-iE',
	events: {
	  'onReady': onPlayerReady, //An event I'll be using to make some adjustments before we start :)
	  //'onStateChange': onPlayerStateChange
	}
  });
}

function onPlayerReady() {
	
	//Sets the volume to 1 (not bothersome).
	player.setVolume(5);
	//Shuffles playlist.
	player.setShuffle(true); //Sets the youtube setting for shuffled playlists on for this playlist.
	//Randomizes first video.
	var firstVideoInIndex = Math.random() * player.getPlaylist().length; //Get video playlist length.
	firstVideoInIndex = firstVideoInIndex.toFixed(0); //Rounds the random value. (which is a float)
	player.playVideoAt(firstVideoInIndex); //Sets the playlist index but also starts playing it (look below).
	player.stopVideo(); //Stops the video immediately to make sure no data will be used for no reason.
	
	$('input[type="range" i].youtubeMusicVolumeSlider').val(player.getVolume() / 20);
	
	if (player.getPlayerState() != 1 && player.getPlayerState() != 3) {
		$('button.startYoutubeMusicTrack').text("Play");
	} else {
		$('button.startYoutubeMusicTrack').text("Pause");
	}
}

function switchMusicPanelSwitchText() {
	if ($("div.youtubeMusicPanel").hasClass("youtubeMusicPanelActive")) {
				
		$("button.switchYoutubeMusicPanel").text("<|");
		
	} else {
		
		$("button.switchYoutubeMusicPanel").text("|>");
		
	}
}

var rainbowCounter = 0;
var rainbowFrame;

function startYoutubeRainbowBorders() {
	clearInterval(rainbowFrame);
	rainbowFrame = setInterval(function() {
			rainbowCounter++;
			if (rainbowCounter > 360) {
				rainbowCounter = 0;
			}
			$("div.youtubeMusicPanel").css({"border": "1px solid hsl(" + String(rainbowCounter) + ", 100%,40%)", "border-left": "2px"});
		},
			1000/(24*4)
	);
}
>>>>>>> parent of 005ca3d... Visuals update
