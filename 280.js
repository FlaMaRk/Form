// 280 папа1

// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	if(elem.value.length >= 5){
//         console.log("длина текста достигла 5 символом")
//     }
// });




// 280 папа2

// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function() {
// if(elem.value.length < 6 ){
//  p.textContent = "можно ввести символов" + " "+ (+(5) - +(elem.value.length))
// }
// else if (elem.value.length > 5){
//     p.textContent = "вы привышаете на" + " "+ ( +(elem.value.length) - +5)
// }
// });