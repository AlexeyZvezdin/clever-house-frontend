const elgatoEve = document.getElementById("elgato_eve");

elgatoEve.style.display = "none";

Array.from(document.getElementsByClassName("widget elgatoeve")).forEach(
	function(item) {
		item.onclick = function() {
			elgatoEve.style.display === "block"
				? (elgatoEve.style.display = "none") && (shadow.style.display = "none")
				: (elgatoEve.style.display = "block") &&
				  (shadow.style.display = "block");
		};
	}
);

const eveOut = document.getElementById("eve_plus");
const eveIn = document.getElementById("eve_input");
console.log(eveOut);
eveIn.oninput = function() {
	if (eveIn.value > 0) {
		eveOut.innerHTML = "+" + eveIn.value;
	} else {
		eveOut.innerHTML = eveIn.value;
	}
};

let btnsEve = document.getElementsByClassName("eve_labels");

for (let i = 0; i < btnsEve.length; i++) {
	btnsEve[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("eve_active");
		current[0].className = current[0].className.replace(" eve_active", "");
		this.className += " eve_active";
	});
}
//замутить тему с айдии переключением
