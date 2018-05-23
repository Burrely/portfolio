//Jquery

$(window).on("load", function(){
	
	console.log("Page has loaded");
	$(".pageLoadingscreen").fadeOut("slow", 0);
	
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
	  'onReady': onPlayerReady,
	  //'onStateChange': onPlayerStateChange
	}
  });
}

function onPlayerReady() {
	player.setVolume(1);
	player.setShuffle(true);
}