let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let showTime = document.querySelector('.Displaytimer');
let int = null;

//start timer
document.getElementById('button-start').addEventListener('click', () => {
	if (int !== null) {
		clearInterval(int);
	}
	int = setInterval(displayTimer, 10);
});

//stop timer
document.getElementById('button-stop').addEventListener('click', () => {
	clearInterval(int);
});

//reset timer
document.getElementById('button-reset').addEventListener('click', () => {
	clearInterval(int);
	[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
	showTime.innerHTML = '00 : 00 : 00 : 000 ';
});

//conditons for display timer
function displayTimer() {
	milliseconds += 10;
	if (milliseconds == 1000) {
		milliseconds = 0;
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
			if (minutes == 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	let hr = hours < 10 ? '0' + hours : hours;
	let min = minutes < 10 ? '0' + minutes : minutes;
	let sec = seconds < 10 ? '0' + seconds : seconds;
	let msec = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

	showTime.innerHTML = ` ${hr} : ${min} : ${sec} : ${msec}`;
}
