//let, var - valor pode ser alterado
//const - valor nao poder ser alterado

var name = "Mayque Oliveira";
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
if (PI === 3.14) {
  console.log("Tudo normal");
} else {
  console.log("Algo de errado nao esta certo");
}

function soma() {
  n1 = 1;
  n2 = 2;
  let n3 = n1 + n2;
  return n3;
  console.log(n3);
}
//soma();

let quartos = 4;
let m2 = 3000;

function preco(m, q) {
  if (q === 1) {
    return m * 1;
  } else if (q === 2) {
    return m * 1.2;
  } else if (q === 3) {
    return m * 1.5;
  } else {
    return "impossivel definir valor";
  }
}

console.log(preco(m2, quartos));

// arrays

let classes = ["warlock", "mage", "sorcerer", "monk", "warrior", "assassin"];

console.log(classes[0]);

let carros = ["BMW", "Ferrari", "Mercedes"];

//1
console.log(carros[1]);

carros[1] = "Audi";

carros.push("Volvo");

console.log(carros.length);
