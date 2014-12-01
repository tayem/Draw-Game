var lock = true;
function start(){
document.getElementById("button").src = "button.png";
var randomTimer = Math.floor(Math.random() * (5 - 2)) + 2;
setTimeout(function() {
	document.getElementById("p1").src = "green.jpg";
	document.getElementById("p2").src = "green.jpg";
	lock = false;
	}, (randomTimer * 1000));

}

function win(p){
	if (lock === false){
		if(p === 1){
			document.getElementById("button").src = "p1w.jpg";
			lock = true;
		}
		else{
			document.getElementById("button").src = "p2w.jpg";
			lock = true;
		}
	}
}

