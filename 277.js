let elem   = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	if (elem.disabled) {
		elem.disabled = false;
	} else {
		elem.disabled = true;
	}
});