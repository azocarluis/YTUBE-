// Obtener referencias a los elementos del DOM
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');
const searchIconInside = document.querySelector('.search-icon-inside');
const clearIconInside = document.querySelector('.clear-icon-inside');
const hiddenSubmitButton = document.querySelector('.hidden-submit-button'); // El botón de submit oculto
const snaptubeIcons = document.querySelectorAll('.snaptube-icon');

// --- Lógica del buscador ---

// Mostrar/Ocultar el icono de borrado (X)
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        clearIconInside.classList.add('visible');
    } else {
        clearIconInside.classList.remove('visible');
    }
});

// Limpiar el input al hacer clic en la 'X'
clearIconInside.addEventListener('click', () => {
    searchInput.value = '';
    clearIconInside.classList.remove('visible');
    searchInput.focus(); // Devolver el foco al input
});

// Detectar el clic en el icono de búsqueda o Enter
searchIconInside.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el ícono de la lupa envíe el formulario si no se desea
    if (searchInput.value.trim() !== '') { // Si hay texto, simular el submit
        searchIconInside.classList.add('clicked'); // Añadir animación
        setTimeout(() => {
            searchIconInside.classList.remove('clicked');
            hiddenSubmitButton.click(); // Simular el clic en el botón de submit oculto
        }, 300); // Duración de la animación
    }
});

// Manejar el envío del formulario (al presionar Enter o simular submit)
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío real del formulario (recarga de página)

    const query = searchInput.value.trim();
    if (query) {
        // Aquí iría la lógica para buscar en YouTube o redirigir
        // Por ejemplo, para abrir la búsqueda en una nueva ventana (o la misma, si quieres)
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
        // También podrías simplemente redirigir dentro de la misma ventana:
        // window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
});

// --- Lógica de animación para iconos inferiores ---
snaptubeIcons.forEach(icon => {
    icon.addEventListener('touchstart', function() {
        this.classList.add('touched');
    }, { passive: true }); // Usar { passive: true } para mejorar el rendimiento en móviles

    icon.addEventListener('animationend', function() {
        this.classList.remove('touched');
    });

    // Opcional: Para simular el efecto en desktop con 'mousedown' si lo pruebas en PC
    icon.addEventListener('mousedown', function() {
        this.classList.add('touched');
    });

    icon.addEventListener('mouseup', function() {
        this.classList.remove('touched');
    });
});

