const xiaomiYeelight = document.getElementById("xiaomi_yeelight_bulb");

Array.from(document.getElementsByClassName("widget xiaomi_yeelight")).forEach(
	function(item) {
		item.onclick = function() {
			xiaomiYeelight.style.display === "block"
				? (xiaomiYeelight.style.display = "none") &&
				  (shadow.style.display = "none")
				: (xiaomiYeelight.style.display = "block") &&
				  (shadow.style.display = "block");
		};
	}
);

// document.getElementById("rating").defaultValue = 4;
// let defPol = document.getElementById("rating").defaultValue;

let pol = document.getElementById("rating");
console.log(pol.value);
pol.style.backgroundColor = "red";

let out = document.getElementById("rating_output");
out.innerHTML = pol.value;
