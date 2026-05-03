let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let nomeAtleta = atletas[i].nome;
        let notasAtleta = atletas[i].notas;

        
        let notasOrdenadas = notasAtleta.sort((a, b) => a - b);

        
        let notasComputadas = notasOrdenadas.slice(1, 4);

        
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });
        
        let media = soma / notasComputadas.length;

        // Saída de dados
        console.log(`Atleta: ${nomeAtleta}`);
        console.log(`Notas Obtidas: ${notasAtleta.join(",")}`);
        console.log(`Média Válida: ${media.toFixed(6)}`);
        console.log(""); 
    }
}

// Executa a função
calcularMedia(atletas);
