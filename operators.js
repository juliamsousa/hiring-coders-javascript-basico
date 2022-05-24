var operador = 100;
var operando = 50;

var resultado = operador * operando;

console.log("O resultado é: ", resultado);

// -------------------------------------------------------

var nome = "Julia";
var sobrenome = "Miranda";

// com esse operador os nomes são concatenados mas não há um espaço entre eles
var nomeCompleto = nome + " " + sobrenome;

console.log("Nome completo", nomeCompleto);

// -------------------------------------------------------

var valor1 = 10;
var valor2 = 'azul';
var valor3 = '3';

resultado = valor1 - valor2;

// aqui será impresso NaN pois o JS não realiza operaçoes aritmeticas entre numeros e caracteres
// as operaçoes sao entre texto e texto ou numero e numero
// caso no valor estivesse um numero, exemplo "3", a operacao seria realizada
// isso ocorre pois o JS apresenta loose types
console.log(resultado);
console.log(valor1 - valor3);
