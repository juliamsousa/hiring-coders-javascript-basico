// Estruras de decisão ou condicionais

var nome = "Julia"

/* 
  = atribuicao de valor
  == comparaçao sem tipo
  === comparacao com tipo
*/

if (nome === "Julia") {
  console.log("If - O nome é Julia");
} else {
    console.log("If - O nome não é Julia");
}

/*
  estrutura de if ternario  
  condicao ? executa se for v : executa se for f
*/ 
nome === "Julia" ? console.log("Ternario - O nome é Julia") : console.log("Ternario - O nome não é Julia");

// -------------------------------------------------------

// utilizando switch para reduzir ifs

switch (nome) {
  case "Julia": {
    console.log("Switch - O nome é Julia")
  };
  break;

  default: {
    console.log("Switch - O nome não é Julia")
  };
  break;
}