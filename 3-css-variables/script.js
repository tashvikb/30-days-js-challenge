
var r = document.querySelector(':root')
var rs = getComputedStyle(r)

function border_change() {
	var border = document.getElementById('border').value;
	// console.log(border)
	r.style.setProperty('--border-size', `${border}px`)
}

function blur_change() {
	var blur = document.getElementById('blur').value;
	// console.log(blur)
	r.style.setProperty('--blur', `${blur}px`)
}

function color_change() {
	var color = document.getElementById('color').value;
	// console.log(color)
	r.style.setProperty('--border-color', `${color}`)
}