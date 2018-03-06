function inite(){
 
 	var unit = document.getElementById('unite');

	var jauges = document.getElementById('bg');

	var load = document.getElementById('my_range');

	load.oninput = init;

	function init() {

		var load_value = load.value;	

		unit.innerHTML = load_value+'%';

		jauges = load_value;

		bg.style.width = jauges+'%';

		bg.style.background = '#69f0ae';

		bg.style.height = '50px';

		

		if(load_value > 50){
			unit.style.color = '#651fff ';
		}

		else{
			unit.style.color = 'black';
		}

	}

}

window.addEventListener("DOMContentLoaded", inite);












