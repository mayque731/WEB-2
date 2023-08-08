//let, var - valor pode ser alterado
//const - valor nao poder ser alterado

var nome = "Mayque Oliveira";
let numero = 69999448231;
const PI = 3.14;
let logico = true;

//1.calcular media de 4 notas
var n1 = 7,
  n2 = 7,
  n3 = 7,
  n4 = 8;
const media = (n1 + n2 + n3 + n4) / 4;
//2.mostrar estado do aluno em relação a media
if (media > 7) {
  console.log("Aluno aprovado");
} else if (media < 7) {
  console.log("Aluno Reprovado");
} else {
  console.log("Aluno em recuperação");
}
//3.calcular aumento de 20% de um salario
var salario = 1600;
var aumento = salario * (20 / 100);
let novo_salario = salario + aumento;
console.log(
  "o salario era de ",
  salario,
  "e aumentou em 20% para",
  novo_salario
);

console.log("media igual a ", media);
//console.log(numero);
//console.log(PI);

//tipagem fraca
if (PI === "3.14") {
  console.log("Tudo normal");
} else {
  console.log("Algo de errado nao esta certo");
}
