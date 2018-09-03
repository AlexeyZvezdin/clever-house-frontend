const xiaomiFloor = document.getElementById("xiaomi_warm_floor");
// console.log(xiaomiFloor);
xiaomiFloor.style.display = "none";
// Затенение на фоне
const shadow = document.getElementById("shadow");

Array.from(document.getElementsByClassName("widget xiaomi_floor")).forEach(
	function(item) {
		item.onclick = function() {
			xiaomiFloor.style.display === "block"
				? (xiaomiFloor.style.display = "none") &&
				  (shadow.style.display = "none")
				: (xiaomiFloor.style.display = "block") &&
				  (shadow.style.display = "block");
		};
	}
);
