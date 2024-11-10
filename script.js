{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function loadBook(bookName) \{\
    // Caminho para o arquivo HTML do livro\
    const filePath = `livros/$\{bookName\}.html`;\
    \
    // Faz uma requisi\'e7\'e3o AJAX para carregar o conte\'fado\
    fetch(filePath)\
        .then(response => response.text())\
        .then(data => \{\
            // Coloca o conte\'fado do livro na \'e1rea #content\
            document.getElementById('content').innerHTML = data;\
        \})\
        .catch(error => \{\
            console.error("Erro ao carregar o livro:", error);\
            document.getElementById('content').innerHTML = "<p>Erro ao carregar o livro. Tente novamente.</p>";\
        \});\
\}\
}