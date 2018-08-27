const knob = document.getElementById("xKnob");

// console.log(firstImg.getBoundingClientRect()); очень важно закрывать любые вещи способные остановить скрипт

knob.style.transformOrigin = "-45px -15px";

knob.onmousedown = function() {
	const center = document.getElementById("center");
	const temp = document.getElementById("knob_temp");
	const centTemp = document.getElementById("center_span");

	let startY = center.getBoundingClientRect().y;
	let startX = center.getBoundingClientRect().x;

	let radAngle = 0;
	let gradAngle = 0;

	document.onmousemove = function(e) {
		knob.ondragstart = function() {
			return false;
		};
		let targetX = 0;
		let targetY = 0;
		// knob.style.transition = "none"; Ужасно убивает производительность
		if (e.clientX - startX < startX) {
			targetX = e.clientX - startX;
		}
		if (e.clientY - startY < startY) {
			targetY = -(e.clientY - startY);
		}

		radAngle = Math.atan2(targetY, targetX) + 1;
		// 1 rad это смещение оси.Надо будет подумать почему раньше внизу -60 работало
		gradAngle = (radAngle * 180) / Math.PI;

		if (gradAngle < 0) {
			gradAngle = 360 + gradAngle;
		} else if (gradAngle > 360) {
			gradAngle = gradAngle - 360;
		}

		if (gradAngle < 5) {
			document.onmousemove = null;
			gradAngle = 25;
		} else if (gradAngle > 300) {
			document.onmousemove = null;
			gradAngle = 280;
		}
		console.log(gradAngle);
		knob.style.transform = `rotate(${-gradAngle + 30}deg)`;

		if (gradAngle < 35 && gradAngle > 0) {
			centTemp.innerHTML = "+23";
			temp.innerHTML = "+23";
		} else if (gradAngle < 70 && gradAngle > 35) {
			centTemp.innerHTML = "+22";
			temp.innerHTML = "+22";
		} else if (gradAngle < 105 && gradAngle > 70) {
			centTemp.innerHTML = "+21";
			temp.innerHTML = "+21";
		} else if (gradAngle < 140 && gradAngle > 105) {
			centTemp.innerHTML = "+20";
			temp.innerHTML = "+20";
		} else if (gradAngle < 175 && gradAngle > 140) {
			centTemp.innerHTML = "+19";
			temp.innerHTML = "+19";
		} else if (gradAngle < 210 && gradAngle > 175) {
			centTemp.innerHTML = "+18";
			temp.innerHTML = "+18";
		} else if (gradAngle < 245 && gradAngle > 210) {
			centTemp.innerHTML = "+17";
			temp.innerHTML = "+17";
		} else if (gradAngle < 280 && gradAngle > 245) {
			centTemp.innerHTML = "+16";
			temp.innerHTML = "+16";
		}
	};

	knob.onmouseup = function() {
		document.onmousemove = null;
	};
};
// Можно доделать, реализовать передачу угла в онклик чтобы при нажатии куда-либо на круге сразу указатель перескакивал бы
// knob.onclick = function(e, gradAngle) {
//   console.log(gradAngle);
//     knob.style.transform = `rotate(${-gradAngle + 25}deg)`;
// }

// 221-50 = 171 409 - 221 =  178
