//Jquery

<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready( function(){
=======
$(window).ready( function(){
>>>>>>> parent of f919251... Fix 2
	console.log("Page has loaded");
=======
$(window).on("load", function(){
	console.log("Page has loaded");
	
<<<<<<< HEAD
>>>>>>> parent of f59e795... Added button images
	$(".pageLoadingscreen").fadeOut("slow", 0);
});
<<<<<<< HEAD
=======
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
	player.setVolume(1);
	player.setShuffle(true);
}
>>>>>>> parent of 2acaea5... Big music player overhaul!
