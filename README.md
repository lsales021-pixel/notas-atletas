#Notas dos Atletas.
O objetivo deste projeto é calcular a média válida de uma competição de ginástica artística. Em competições oficiais, para evitar que notas muito extremas (muito altas ou muito baixas) distorçam o resultado, costuma-se descartar a maior e a menor pontuação.

Como a lógica funciona:
O programa recebe uma matriz de objetos contendo o nome do atleta e suas cinco notas. Para cada atleta, o script realiza os seguintes passos:

Ordenação: Organiza as notas em ordem crescente (ex: de 7 a 10).

Filtragem: Utiliza o método slice para "cortar" a primeira e a última nota, mantendo apenas as três notas centrais.

Cálculo da Média: Soma as três notas restantes e divide por três.

Exibição: Formata o resultado para mostrar o nome, todas as notas originais e a média final calculada.

Tecnologias Utilizadas
Linguagem: JavaScript.

Estruturas de Dados: Objetos (para atletas) e Arrays (para notas).

Métodos Principais: .sort() (ordenação), .slice() (recorte), .forEach() (iteração) e .join() (formatação de texto).

Como Executar o Projeto
Existem duas formas principais de rodar o arquivo notas-atletas.js:

Opção 1: Pelo Terminal (Node.js)
Se você tem o Node.js instalado na sua máquina:

Abra o terminal ou prompt de comando.

Navegue até a pasta onde salvou o arquivo.

Digite o comando:

Bash
node notas-atletas.js
O resultado aparecerá diretamente no terminal.

Opção 2: Pelo Navegador (Console)
Se não quiser instalar nada:

Abra qualquer navegador (Chrome, Edge, Firefox).

Pressione F12 ou clique com o botão direito e selecione Inspecionar.

Vá até a aba Console.

Cole todo o código do arquivo notas-atletas.js e pressione Enter.

Exemplo de Saída Esperada
Ao executar, o sistema retornará algo como:

Atleta: Cesar Abascal

Notas Obtidas: 10,9.34,8.42,10,7.88

Média Válida: 9.253333
