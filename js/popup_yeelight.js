document.getElementById("rating").defaultValue = 4;
let defPol = document.getElementById("rating").defaultValue;

let pol = document.getElementById("rating");
console.log(pol.value);
pol.style.backgroundColor = "red";
pol.style.width = "250px";

let out = document.getElementById("rating_output");
out.insertAdjacentHTML("afterbegin", pol.value);
