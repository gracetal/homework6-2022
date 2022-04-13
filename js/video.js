console.log("hi!")
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slow down video")
	video.playbackRate *= 0.95;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video")
	video.playbackRate /= 0.95;
	console.log("Speed is "+ video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration)
		video.currentTime = 0; 
	console.log("Video current time is", video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute video");
	if (video.muted === false)    
		video.muted = true, 
		document.getElementById("mute").innerHTML = "Unmute"
		
	else
		video.muted = false,
		document.getElementById("mute").innerHTML = "Mute";
	console.log("Video is muted?", video.muted)
})

document.querySelector("#slider").addEventListener("click", function(){
	var slider = document.getElementById("slider");
	var output = document.getElementById("volume");
	output.innerHTML = slider.value + "%";
	video.volume = (slider.value)*0.01

	console.log("Volume is", video.volume)
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("old school")
	document.getElementById("player1").className = "oldSchool"
	
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("original")
	document.getElementById("player1").className = "video"
})

