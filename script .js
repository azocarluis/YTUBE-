// Función para mostrar/ocultar el ícono de la 'X'
function toggleClearIcon() {
    const searchInput = document.querySelector('.search-input');
    const clearIcon = document.querySelector('.clear-icon-inside');
    if (searchInput.value.length > 0) {
        clearIcon.classList.add('visible');
    } else {
        clearIcon.classList.remove('visible');
    }
}

// Función para borrar el contenido del input
function clearSearchInput() {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = ''; // Borra el texto
    searchInput.focus(); // Vuelve a enfocar el input para seguir escribiendo
    toggleClearIcon(); // Oculta la 'X' después de borrar
}

// Función para manejar el clic en la lupa y activar la animación
function handleSearchClick() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.getElementById('searchForm');

    // Asegurarse de que la lupa sea visible para la animación de clic
    searchIcon.style.opacity = '1';

    // Añadir la clase 'clicked' para activar la animación
    searchIcon.classList.add('clicked');

    // Esperar a que termine la animación antes de enviar el formulario
    setTimeout(() => {
        searchIcon.classList.remove('clicked'); // Remover la clase para poder animar de nuevo
        // Reestablecer la opacidad si el mouse ya no está encima después del click
        if (!searchIcon.matches(':hover')) {
            searchIcon.style.opacity = ''; // Eliminar la propiedad de estilo inline para que el CSS tome el control
        }
        if (searchInput.value.trim() !== '') { // Solo enviar si hay texto
            searchForm.submit();
        }
    }, 350); // Ligeramente más largo que la animación (0.3s)
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    toggleClearIcon(); // Verificar estado inicial de la 'X'
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.getElementById('searchIcon');

    // Manejar el evento 'input' para mostrar/ocultar la 'X' (cubre pegar texto, autocompletar)
    searchInput.addEventListener('input', toggleClearIcon);
    javascript 