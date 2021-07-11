function sound(key) {
	switch (key) {
		case "a":
			var sound1 = new Audio("beats/crash.wav")
			sound1.play();
			break;
		case "s":
			var sound2 = new Audio("beats/hihat1.wav")
			sound2.play();
			break;
		case "d":
			var sound3 = new Audio("beats/kick.wav")
			sound3.play();
			break;
		case "f":
			var sound4 = new Audio("beats/ride.wav")
			sound4.play();
			break;
		case "j":
			var sound5 = new Audio("beats/snare.wav")
			sound5.play();
			break;
		case "k":
			var sound6 = new Audio("beats/tom-high.wav")
			sound6.play();
			break;
		case "l":
			var sound7 = new Audio("beats/tom-mid.wav")
			sound7.play();
			break;
		case ";":
			var sound8 = new Audio("beats/tom-low.wav")
			sound8.play();
			break;
		default:
			console.log('Wrong Input!')
			break;
	}
}

document.addEventListener("keypress", (event) => {
	sound(event.key);
})