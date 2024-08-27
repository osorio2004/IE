// scripts.js
function showContent(contentId) {
    // Oculta todos los divs de contenido
    document.querySelectorAll('.content1').forEach(function(content) {
        content.style.display = 'none';
    });

    // Muestra el div de contenido seleccionado
    document.getElementById(contentId).style.display = 'block';
}

