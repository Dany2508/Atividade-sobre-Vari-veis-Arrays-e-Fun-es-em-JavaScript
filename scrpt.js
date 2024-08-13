//1-Exercicio de Tranformação Simples
const numeros = [1, 2, 3, 4, 5];

const NumerosMultiplicados = numeros.map(numero => numero * 3);

console.log(NumerosMultiplicados);

//2-Exercício de Conversão de Tipos
const numero = [1, 2, 3, 4, 5];

const NumeroString = numero.map(numero => numero.toString())

console.log(NumeroString);

//3-Exercício de Manipulação de Strings
const frutas = ["maçã", "banana", "laranja"]

const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasMaiusculas);

//4-Exercício de Extração de Propriedades
const pessoas = [
    {nome:"Alice", idade:25},
    {nome:"Bob", idade:30},
    {nome:"Charlie", idade:35},
]

const nomes = pessoas.map(pessoas => pessoas.nome);

console.log(nomes);

//5-Exercício de Cálculo Composto
const number = [1, 2, 3, 4, 5];

const numberElevadoQuadrado = number.map(number => number ** 2);

console.log(numberElevadoQuadrado);

//6-Exercício de Mutabilidade
let meuArray = [1, 2, 3];

meuArray[0] = 4

console.log(meuArray);

let minhaString = "Olá";

minhaString[0] = "o";

console.log(minhaString);
//Oque acontece?Explique: Nada, porque não pode alterar um caractere específico de uma string depois que ela foi criada.

//7-Exercício de Persistência

//8-Exercício de Tipos de Dados
let saudacaoPrimitiva = "Olá";

let saudacaoReferencia = {
    saudacao: "Olá"
};

console.log(saudacaoPrimitiva);

console.log(saudacaoReferencia.saudacao);

//9-Exercício de Estrutura de Dados
const arraySimples = [1, 2, 3];

const arrayMulti = [
    [1, 2],
    [3, 4]
];

console.log(arraySimples);
console.log(arrayMulti);

//Desafio
const produtos = [
    {nome: "Produto 1", preco: 100},
    {nome: "Produto 2", preco: 200},
    {nome: "Produto 3", preco: 300}
];

const precoDesconto = produtos.map(produto => produto.preco * 0.9);

console.log(precoDesconto);