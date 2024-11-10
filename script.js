function loadBook(bookName) {
    // Caminho para o arquivo HTML do livro
    const filePath = `livros/${bookName}.html`;
    
    // Faz uma requisição AJAX para carregar o conteúdo
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o livro: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Coloca o conteúdo do livro na área #content
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao carregar o livro:", error);
            document.getElementById('content').innerHTML = "<p>Erro ao carregar o livro. Tente novamente.</p>";
        });
}
