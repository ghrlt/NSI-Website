/* Age */
var diff = Date.now() - (new Date(2004, 11, 18)).getTime();
var age = new Date(diff); 

var x = Math.abs(age.getUTCFullYear() - 1970);

//This is working without the ""+x but it's recognized as working only in chrome
//document.getElementById('age').innerText = ""+x

var angle = 0
function turnBody() {
	let bd = document.querySelector(".carrousel");
	angle += 360
	bd.setAttribute("style", "transform: rotate("+angle+"deg) rotateX("+angleX+"deg) rotateY("+angleY+"deg);")
}

var angleY = 0;
var angleX = 0;

function turnY(sign) {
	let spinner = document.querySelector(".carrousel");

	if(!sign) {
		
		angleY = angleY + 90
	} else { 
		
		angleY = angleY - 90
	}
	console.log("go spin Y")
	//angleX = 0
	spinner.setAttribute("style", "transform: rotate("+angle+"deg) rotateX("+angleX+"deg) rotateY("+angleY+"deg);")
}	

function turnX(sign) {
	let spinner = document.querySelector(".carrousel");

	if(!sign) {
		if (angleX == 8) return;
		angleX = angleX + 1
	} else {
		if (angleX == -8) return;
		angleX = angleX - 1
	}
	console.log("go spin X")
	spinner.setAttribute("style", "transform: rotate("+angle+"deg) rotateX("+angleX+"deg) rotateY("+angleY+"deg);")

}



document.onkeypress = KeyPressed
function KeyPressed(e) {
    e = e || window.event;

	// Make the carrousel move with keys
	if (e.key == "ArrowLeft" || e.key == "q" || e.key == "a") { //Via Anydesk arrow don't work --
		turnY('-')
	}
	else if (e.key == "ArrowRight" || e.key == "d") {
		turnY('')
	}

	if (e.key == "ArrowUp" || e.key == "z" || e.key == "w") {
		turnX('')
	} else if (e.key == "ArrowDown" || e.key == "s") {
		turnX('-')
	}

	if (e.key == " ") {
		turnBody()
	}
};
