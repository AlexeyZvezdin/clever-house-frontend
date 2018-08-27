const xiaomiFloor = document.getElementById("xiaomi_warm_floor");
// console.log(xiaomiFloor);
xiaomiFloor.style.display = "none";

const xiaomiYeelight = document.getElementById("xiaomi_yeelight_bulb");

const shadow = document.querySelector(".shadow");
console.log(shadow);

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

//задумка чтобы кнопки стали модульными и закрывали любой виджет
// const btnAccept = document.getElementsByClassName("accept");
// const btnDecline = document.getElementsByClassName("decline");
Array.from(document.getElementsByClassName("accept")).forEach(function(item) {
	item.onclick = function() {
		item.parentNode.parentNode.style.display === "block"
			? (item.parentNode.parentNode.style.display = "none") &&
			  (shadow.style.display = "none")
			: (item.parentNode.parentNode.style.display = "block");
	};
});

Array.from(document.getElementsByClassName("decline")).forEach(function(item) {
	item.onclick = function() {
		item.parentNode.parentNode.style.display === "block"
			? (item.parentNode.parentNode.style.display = "none") &&
			  (shadow.style.display = "none")
			: (item.parentNode.parentNode.style.display = "block");
	};
});
// Конец кнопок
