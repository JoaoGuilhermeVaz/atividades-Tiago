let filmesFavoritos = ["O Senhor dos Anéis", "Matrix", "Interestelar"];

filmesFavoritos[0] = "A Origem"; 

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log("Lista de Filmes Favoritos:", filmesFavoritos);
