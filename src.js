// --- Funções ---
// Hugo Faria


function calcularMulta(dias) {
    return dias > 15 ? (dias - 15) * 0.5 : 0;
}

function estaAberta(dia, hora) {
    if (dia === "domingo") {
        return false;
    } else if (dia === "sábado") {
        return hora >= 10 && hora < 13;
    } else {
        return hora >= 9 && hora < 19;
    }
}

function formatarEuros(valor) {
    return valor.toFixed(2).replace(".", ",") + " €";
}

function mensagemMulta(dias) {
    const multa = calcularMulta(dias);
    if (multa === 0) return "Sem multa";
    return `Multa a pagar: ${formatarEuros(multa)}`;
}

// --- EXERCÍCIO 1 e 2: ---

console.log("--- Testes Exercício 1 ---");


console.log("Bem-vindos à Biblioteca do Bairro!");


console.log("--- Testes Exercício 2 ---");


const nome = "Biblioteca do Bairro";
const morada = "Rua das Flores, 12";
let livrosDisponiveis = 1250;

livrosDisponiveis = livrosDisponiveis - 3; 
console.log(livrosDisponiveis); 

console.log(`A ${nome} tem ${livrosDisponiveis} livros disponíveis.`);
console.log(typeof nome, typeof morada, typeof livrosDisponiveis);
console.log(nome.toUpperCase());

// --- EXERCÍCIO 3---
console.log("--- Testes Exercício 3 ---");


const dia = "sábado";
const hora = 11;
let aberta;

if (dia === "domingo") {
    aberta = false;
} else if (dia === "sábado") {
    aberta = hora >= 10 && hora < 13;
} else {
    aberta = hora >= 9 && hora < 19;
}

console.log(aberta ? "Aberta" : "Fechada");

// --- Exercício 4 ---
console.log("--- Testes Exercício 4 ---");
console.log(mensagemMulta(10)); 
console.log(mensagemMulta(18)); 
console.log(mensagemMulta(22)); 

console.log(estaAberta("domingo", 11)); 
console.log(estaAberta("quarta", 10)); 
console.log(estaAberta("sábado", 14));  

// --- EXERCÍCIO 5 ---

console.log("--- Testes Exercício 5 ---");

const livros = ["Os Maias", "Mensagem", "A Sibila", "Os Lusíadas", "Aparição"];

livros.push("Memorial do Convento", "Ensaio sobre a Cegueira");
console.log(`Total de livros: ${livros.length}`); // 7

console.log("--- Lista Numerada ---");
livros.forEach((titulo, i) => {
    console.log(`${i + 1}. ${titulo}`);
});

const longos = livros.filter(t => t.length > 10);
console.log("--- Livros com mais de 10 letras ---");
console.log(longos);

const maiusculas = livros.map(t => t.toUpperCase());
console.log("--- Títulos em maiúsculas ---");
console.log(maiusculas);