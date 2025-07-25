/*
--------------------------------------------------
Funcionalidad JavaScript (CORREGIDA para YouTube)
--------------------------------------------------
*/
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');

// Función para redirigir al buscador de YouTube
function redirectToYouTubeSearch() {
    const query = searchBar.value.trim(); // Obtiene el texto y quita espacios extra
    if (query) { // Si hay texto, redirige
        // URL correcta para buscar en YouTube
        window.location.href = `http://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
}

// Evento para cuando se hace clic en el icono de la lupa
searchIcon.addEventListener('click', redirectToYouTubeSearch);

// Evento para cuando se presiona 'Enter' en la barra de búsqueda
searchBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectToYouTubeSearch();
    }
});
