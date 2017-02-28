//Jquery

$(window).on("load", function(){
	
	console.log("Page has loaded");
	$(".pageLoadingscreen").fadeOut("slow", 0);
	
});

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
	player.setVolume(1);
	//Shuffles playlist.
	player.setShuffle(true); //Sets the youtube setting for shuffled playlists on for this playlist.
	//Randomizes first video.
	var firstVideoInIndex = Math.random() * player.getPlaylist().length; //Get video playlist length.
	firstVideoInIndex = firstVideoInIndex.toFixed(0); //Rounds the random value. (which is a float)
	player.playVideoAt(firstVideoInIndex); //Sets the playlist index but also starts playing it (look below).
	player.stopVideo(); //Stops the video immediately to make sure no data will be used for no reason.
	
	$('input[type="range" i].youtubeMusicVolumeSlider').val(player.getVolume() / 100);
}