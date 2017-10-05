// 4083952015263 numeros probar

///////////////////////////////             SE EVALÚA PROMPT CON UNA LETRA?           ////////////////////////

function isValidCard(){
	//Pregunta por el numero
	do{
		var credCard = prompt("Ingrese su Tarjeta");
			//si el un parseInt a la variable, da NaN (tiene letras), pide un num valido.
			if (isNaN(parseInt(credCard))) {
				credCard = prompt("Ingrese un numero valido");
		}
	//repite el do mientras credCard esté vacío, sea NaN o sea diferente a 16 números.
	} while (!credCard || isNaN(parseInt(credCard)));

	//separa los números del string en arrays.
	var cardSplit = credCard.split("");
	//var que va a contener los números invertidos
	var cardRev = [];
	//for, que itera en cardSplit.

	for (var i = 0; i < cardSplit.length; i++) {
		//toma el índice [i] de cardSplit y ponlo al comienzo de cardRev(make it a number)
		cardRev.unshift(parseInt(cardSplit[i]))
	}

	var result = 0;
	var even = [];
	
	//itera en los números de cardRev.
	for (var i = 0; i < cardRev.length; i++) {
		//si es módulo de 2 (está en una posición IMPAR) súmalo a result
		if (i % 2 == 0) {
			result += cardRev[i];
		//si está en posición PAR multiplícalo x 2 y mételo a even!
		} else {
			even.push(cardRev[i]*2);
	}
		
	}
	//itera en even
	for (var i = 0; i < even.length; i++) {
		//si es menor a 10, súmalo a result
		if (even[i] < 10) {
			result += even[i];
		} else {
			//si no, vuélvelo un string y ponlo en esta Var
			var evenTemp = even[i] + ("");
			//separa los números del string temporal y pon los array en esta Var
			var evenTempSpl = evenTemp.split("")
			for (var j = 0; j < evenTempSpl.length; j++) {
				//transformalos a número y súmalos a result.
				result += parseInt(evenTempSpl[j])
			}
		}
		
	}
//si result módulo de 10 es 0, "felicitaciones", si no, "Ooooh".
 return result % 10 === 0 ? "Felicitaciones, tarjeta valida!" : "Ooooh, Tarjeta invalida!";
}