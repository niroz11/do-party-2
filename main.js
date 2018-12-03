var span = document.querySelector('.span');
var text = document.querySelector('.input');
var button = document.querySelector('.btn');


button.addEventListener('click',function(e){
	e.preventDefault();
	span.innerText = text.value.toUpperCase();
});

