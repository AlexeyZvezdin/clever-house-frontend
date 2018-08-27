let btns = document.getElementsByClassName("wg_head");

// Тривиальное решение, конечно, но времени на раздумья нет.
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("w_active");
		current[0].className = current[0].className.replace(" w_active", "");
		this.className += " w_active";
	});
}

function widgetButtonUp() {
	const BoxEl = document.getElementById("overflow_y");
	// scrollTop;
	BoxEl.scrollBy(0, 80);
	console.log(BoxEl.scrollTop);
}

function arrowToLeft() {
	const BoxEl = document.getElementById("all_widgets__tape");
	BoxEl.scrollBy(-80, 0);
	console.log(BoxEl.scrollLeft);
}

function arrowToRight() {
	const BoxEl = document.getElementById("all_widgets__tape");
	BoxEl.scrollBy(80, 0);
	console.log(BoxEl.scrollLeft);
}
