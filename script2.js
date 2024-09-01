// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const string = prompt("Digite uma palavra: ");

const array = string.split("");
let contador = 0;

if (array.includes("a", "A")) {
    console.log("A palavra digitada contém a letra a.");
} else {
    console.log("A palavra digitada não contém a letra a.");
}

array.forEach((item, index) => {
    if (item == "a" || item == "A") {
        contador++;
    }
});
console.log(contador);
