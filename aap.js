const livro = {
titulo: "Os Maias",
autor: "Eça de Queirós",
ano: 1888,
disponivel: true,
};
console.log(livro.titulo);
livro.disponivel = false; 
livro.estante = "B3"; 
console.log(livro);


const catalogo = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
  { titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: false },
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true },
  { titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977, disponivel: true },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, disponivel: false },
  { titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", ano: 1995, disponivel: true }
];

for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].titulo + " — " + catalogo[i].autor + " (" + catalogo[i].ano + ")");
}

let contador = 0;
for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].disponivel == true) {
    contador++;
  }
}
console.log("Disponiveis: " + contador);

let antigo = catalogo[0];
for (let i = 1; i < catalogo.length; i++) {
  if (catalogo[i].ano < antigo.ano) {
    antigo = catalogo[i];
  }
}
console.log("Mais antigo: " + antigo.titulo + " — " + antigo.autor + " (" + antigo.ano + ")");

function emprestar(nome) {
  let achei = false;
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].titulo == nome) {
      achei = true;
      if (catalogo[i].disponivel == true) {
        catalogo[i].disponivel = false;
        console.log("Livro emprestado com sucesso!");
      } else {
        console.log("Esse livro ja esta emprestado!");
      }
    }
  }
  if (achei == false) {
    console.log("Livro nao encontrado.");
  }
}

emprestar("Dom Casmurro");