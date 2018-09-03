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
