window.onload = pageLoad;

function pageLoad() {
	document.getElementById("start").onclick = startGame;
}

function startGame() {
	var numbox = document.getElementById("numbox");
	if (numbox.value >= 1) {
		alert("Ready");
		timeStart();
		addBox();
	}
	else {
		alert("Please input number of box!");
	}
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = 30;
	var x = document.getElementById("clock");
	var SetTimerInterval = setInterval(timeCount, TIMER_TICK);
	x.innerHTML = timer;
	function timeCount() {
		var allbox = document.querySelectorAll("#game-layer div");
		timer -= 1;
		for (var i = 0; allbox.length > i; i++) {
			x.innerHTML = timer;
			i++;
			if (timer == 0) {
				alert("Game over!");
				x.innerHTML = "00";
				clearInterval(SetTimerInterval);
			}

		}
		if (allbox.length == 0 && timer != 0) {
			clearInterval(SetTimerInterval);
			clearScreen();
			alert("Your win!");
		}
	}
}

function addBox() {
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement("div");
		tempbox.className = "area";
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (475) + "px";
		tempbox.style.top = Math.random() * (475) + "px";
		tempbox.style.width = "20px";
		tempbox.style.height = "20px";
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.borderRadius = "5px";
		tempbox.style.border = "2px solid black";
		tempbox.style.cursor = "pointer";
		tempbox.style.position = "absolute";
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box) {
	box.onclick = function () {
		box.parentNode.removeChild(box);
	}
	box.addEventListener('click', () => {
		box.remove();
	});
}

function clearScreen() {
	var allbox = document.querySelectorAll("#game-layer div");
	for (var i = 0; i < allbox.length; i++) {
		allbox[i].parentNode.removeChild(allbox[i]);
	}
	reloadPage();
}

function reloadPage() {
	location.reload();
}