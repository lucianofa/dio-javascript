//variáveis
var idade = 29;
var idade2 = 10;
var frase = "japão é o melhor time do mundo"
var nome = "Rafael Galleani";

//condicionais
if (idade > idade2) {
    alert("the book is idade maior que idade2");
} else {
    alert("the book not is idade menor que idade2");
};


//funções
alert("Nome " + nome + " tem " + idade + idade2);
alert("Nome " + nome + " tem " + (idade + idade2)); //concatena na primeira execução mas depois somou
alert("Soma idade+idade2: \n" + (idade + idade2).toString()); //soma com resultado na linha de baixo \n

//console
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("japão", "brasil"));
console.log(frase.toLocaleUpperCase());
console.log(idade * idade2);

//arrays
var lista = ["maça", "pera", "laranja"];
console.log("lista[1]: " + lista[1]);
lista.push("uva"); //acrescenta uva
console.log("lista com push uva: " + lista)
console.log("lista: " + lista); //["maça", "pera", "laranja", "uva"]
console.log("join: " + lista.join("|"));
console.log("toString: " + lista.toString()); //laranja,pera,maça
lista.pop(); //remove último elemento
console.log("lista: " + lista); //["maça", "pera", "laranja"]
console.log("lenght: " + lista.length); //3
console.log("revese: " + lista.reverse()); //["laranja", "pera", "maça"]
console.log("primeiro elemento: " + lista[0]); // laranja
console.log("primeira letra: " + lista.toString()[0]); // l (pega a primeira letra do resultado da conversão)
console.log("primeira letra: " + lista[1].toString()[0]); // p (pegao segundo elemento e depois converte)

//dicionário é um objeto JSON
var frutas = { nome: "maça", cor: "vermelha" };
console.log(frutas.nome);
//lista de dicionários usando []
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas[0].nome, frutas[1].nome);
