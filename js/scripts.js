// Variable global del resultado del juego.
var resultado;

// Funcion que retorna un numero al azar para que jugara la pc.
function seleccionMaquina(minimo, maximo){
	return Math.round(Math.random() * maximo - minimo) + minimo;
}

// Funcion de inicio del juego.
function inicio(){
	var btn_piedra = document.getElementById('btn-piedra');
	var btn_papel = document.getElementById('btn-papel');
	var btn_tijera = document.getElementById('btn-tijera');
	var btn_lagarto = document.getElementById('btn-lagarto');
	var btn_spock = document.getElementById('btn-spock');
	var btn_reset = document.getElementById('btn-reinicio');

	btn_piedra.addEventListener("click", jugar);
	btn_papel.addEventListener("click", jugar);
	btn_tijera.addEventListener("click", jugar);
	btn_lagarto.addEventListener("click", jugar);
	btn_spock.addEventListener("click", jugar);
	btn_reset.addEventListener("click", reiniciarJuego);
}

// Funcion que llevara el control del juego.
function jugar(){
	// Primero oculto el bloque de opciones y muestro el bloque con las fichas jugadas.
	document.getElementById('opciones').style.display = "none";
	document.getElementById('seleccion').style.display = "block";

	// Se define un array con las fichas de juego y se selecciona un valor al azar para elegir la ficha de la maquina.
	var fichas = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
	var opcionMaquina = fichas[seleccionMaquina(0, 4)];

	// Se inserta primero el html de la ficha jugada por el usuario de acuerdo al boton pulsado.
	// Luego se inserta el html de la ficha jugada por la pc pero por medio de la funcion setTimeout despues de un lapso de 500 milisegundas = 0.5 segundos
	document.getElementById('ficha-jugador').innerHTML = '<img src="img/' + this.dataset.opcion + '.png" class="ficha ficha-resultado">';
	setTimeout("document.getElementById('ficha-pc').innerHTML = '<img src=\"img/" + opcionMaquina + ".png\" class=\"ficha ficha-resultado\">'", 500);

	// Condicionales para definir el resultado del juego de acuerdo a las fichas seleccionadas
	if (this.dataset.opcion == opcionMaquina){
		resultado = 'Has Empatado';
	} else if (this.dataset.opcion == 'piedra'){
		resultado = (opcionMaquina == 'lagarto' || opcionMaquina == 'tijera') ? 'Has Ganado':'Has Perdido';
	} else if (this.dataset.opcion == 'papel'){
		resultado = (opcionMaquina == 'piedra' || opcionMaquina == 'spock') ? 'Has Ganado':'Has Perdido';
	} else if (this.dataset.opcion == 'tijera'){
		resultado = (opcionMaquina == 'lagarto' || opcionMaquina == 'papel') ? 'Has Ganado':'Has Perdido';
	} else if (this.dataset.opcion == 'lagarto'){
		resultado = (opcionMaquina == 'spock' || opcionMaquina == 'papel') ? 'Has Ganado':'Has Perdido';
	} else {
		resultado = (opcionMaquina == 'piedra' || opcionMaquina == 'tijera') ? 'Has Ganado':'Has Perdido';
	}

	// Llama a la funcion mostrarResultado despues de 1500 milisegundos = 1.5 segundos
	setTimeout("mostrarResultado()", 1500);
}

// Funcion que oculta el bloque de las fichas jugadas y muestra el bloque con el resultado del juego.
function mostrarResultado(){
	document.getElementById('seleccion').style.display = 'none';
	document.getElementById('ficha-pc').innerHTML = '';
	document.getElementById('resultado').style.display = 'block';
	document.getElementById('resultado-juego').innerHTML = '<h1>' + resultado + '</h1>';
}

// Funcion que oculta el bloque del resultado y vuelve a mostrar el bloque de las fichas de juego.
function reiniciarJuego(){
	document.getElementById('resultado').style.display = 'none';
	document.getElementById('opciones').style.display = 'block';
}