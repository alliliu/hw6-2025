// Video functions citation: https://www.w3schools.com/tags/ref_av_dom.asp

// PAGE LOAD: Initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Initalize window element function activated")

	video=document.querySelector("#player1")

	video.autoplay=false;
	video.loop=false;

	console.log("Autoplay set value: "+ video.autoplay)
	console.log("Loop set value: "+ video.loop)
});

// PLAY BUTTON: Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video function activated");
	video.play();

	let volume = video.volume * 100;

	console.log(volume);

	document.querySelector("#volume").textContent = volume + "%"; // update volume information
});

// PAUSE BUTTON: Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video function activated");
	video.pause();
});

// SLOW DOWN: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	
	console.log("Slow Down function activated");

	let videoSpeed = video.playbackSpeed;
	video.playbackSpeed = videoSpeed * 0.9; // slow down by 10% each time

	console.log("Updated New Speed: "+ video.playbackSpeed);
});

// SPEED UP: Increase the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. CHECK THIS!! If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	
	console.log("Speed Up function activated");

	let videoSpeed = video.playbackSpeed; // get current speed
	video.playbackSpeed = videoSpeed * (1 / 0.9); // increase speed proportionally

	console.log("Updated New Speed: " + video.playbackSpeed);
});

// SKIP AHEAD: Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	
	console.log("Skip Ahead function activated");

	let videoLength = video.length;
	let videoCurrentLocation = video.currentLocation; // current location of video

	if ((videoCurrentLocation + 10) <= videoLength) { // check if skipped ahead by 10s on the current location of video
		video.currentLocation = videoCurrentLocation + 10; // update video current time by adding 10s
	}
	else {
		video.currentLocation = 0; // exceeded video length; go to start of video
	}

	console.log("Current time updated: " + video.currentLocation);
});

// MUTE: Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	
	console.log("Mute/Unmute functon activated");

	if (video.mute) { // if video is currently muted (TRUE)
		console.log("Unmute");
		video.mute = false; // change to unmute video
		document.querySelector("#mute").textContent = "Mute"; // update button text to show "Mute"
	}

	else {
		console.log("Mute"); // current status of video is unmuted
		video.mute = true;  // mute the video
		document.querySelector("#mute").textContent = "Unmute";
	}
});

// VOLUME SLIDER: Change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("change", function() {
	
	console.log("Volume slider function activated");

	let volumeSliderValue = document.querySelector("#slider").value; // get the value of the volume that user slid to

	console.log('Current volume slider value: ' +volumeSliderValue);

	video.volume = volumeSliderValue / 100; // update volume information
	document.querySelector("#volume").textContent = volumeSliderValue + "%";
});

// STYLED: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	
	console.log("oldSchool function activated");

	video.classList.add("oldSchool");
	// classList: returns the CSS classnames of an element
	// classList Citation: https://www.w3schools.com/jsref/prop_element_classlist.asp
});

// ORIGINAL: Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style function activated");
	video.classList.remove("oldSchool");
	// Remove Citation: https://www.w3schools.com/jsref/met_element_remove.asp
});
