var synth = window.speechSynthesis;
voices = synth.getVoices();

var txt = document.getElementById("txtinput");
var stop = document.getElementById("stop");
var resume = document.getElementById("resume");
var pause = document.getElementById("pause");

var speakObj;

disableBtns();

function speak() {
	if (synth.speaking) {
	        document.getElementById("msg").innerHTML = "Already speaking!!";
	        return;
	    }
	if (txt.value !== '') {
	speakObj = new SpeechSynthesisUtterance(txt.value);
	speakObj.onend = function (event) {
	 	disableBtns();
	}
	speakObj.onerror = function (event) {
	    console.error('SpeechSynthesisUtterance.onerror');
	}
	speakObj.voice = voices[0]; 
	speakObj.pitch = 1;
	speakObj.rate = 1;
	synth.speak(speakObj);
	 enableBtns();
	}
	else {
		document.getElementById("msg").innerHTML = "Enter some text!!";
	}
}

function pauseSpeech() {
	synth.pause();
}

function resumeSpeech() {
	synth.resume();
}

function stopSpeech() {
	synth.cancel();
}

function disableBtns() {
	stop.disabled = !synth.speaking;
	resume.disabled = !synth.speaking;
	pause.disabled = !synth.speaking; 
}

function enableBtns() {
	stop.disabled = false;
	resume.disabled = false;
	pause.disabled = false; 
}