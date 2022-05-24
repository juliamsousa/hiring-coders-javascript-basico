// Laços de repetiçao

var numeroSorteado = 10

for (var i=0; i <= 100; i++) {
  // Returns a random integer from 0 to 10:
  var numero = Math.floor(Math.random() * 11);

  if (numero === numeroSorteado) {
    console.log("O numero " + numeroSorteado + " foi encontrado");
    // seu uso não é muito recomendado, pois significa que a estrutura não é muito adequada
    break;
  }
}

// -------------------------------------------------------

// tabuada de numeros inteiros

for (var i=1; i<=10; i++) {
  for (var j=1; j<=10; j++) {
    console.log(i + " x " + j + " = " + i*j);
  } 
  console.log("// ----------------------------\n");
}

// -------------------------------------------------------

var isFound = false;

while (!isFound) {
  var numero = Math.floor(Math.random() * 11);

  isFound = numero == numeroSorteado;

  if(isFound) {
    console.log("O número foi encontrado");
  }
}
