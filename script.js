        const pageCreationDate = new Date(2025, 0, 12);
        function updatePageCounter() {
            const today = new Date();
            const diffTime = today - pageCreationDate;
            const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById("page-counter").textContent = `Llevo ${daysPassed} días contandote sobre mi y lo que siento por ti. Cada palabra escrita es un reflejo de mi amor eterno, un testimonio de mi compromiso de esperar por la mujer que llenaba mis días de paz y alegría.`;
        }
        updatePageCounter();
        setInterval(updatePageCounter, 86400000);

//musica
    let currentTrackDuration = 180; // Duración fija para la barra de progreso (3 minutos)
    let currentTime = 0; // Tiempo actual en segundos
    let isPlaying = false; // Estado de reproducción
    let lastTrackName = ''; // Último nombre de la canción detectada
    
    async function fetchNowPlaying() {
        try {
            const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Mylosk&api_key=5b08afa13b775c295e820232b02c650a&format=json');
            const data = await response.json();
    
            const track = data.recenttracks.track[0];
    
            if (track) {
                const currentTrackName = track.name;
    
                // Verifica si la canción ha cambiado
                if (currentTrackName !== lastTrackName) {
                    lastTrackName = currentTrackName;
    
                    // Actualiza la información de la canción
                    document.getElementById('song').textContent = `Canción: ${track.name}`;
                    document.getElementById('artist').textContent = `Artista: ${track.artist['#text']}`;
                    document.getElementById('album-image').src = track.image[2]['#text']; // Imagen grande
    
                    if (track['@attr'] && track['@attr'].nowplaying) {
                        isPlaying = true;
                        currentTrackDuration = track.duration ? parseInt(track.duration) : 240; // Valor predeterminado
                        currentTime = 0; // Reinicia el tiempo
                    } else {
                        isPlaying = false;
                    }
                }
            } else {
                isPlaying = false; // No hay pista disponible
            }
            updateProgressBar();
        } catch (error) {
            console.error('Error al obtener la canción:', error);
        }
    }
    
    function updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const timeInfo = document.getElementById('time-info');
        const statusMessage = document.getElementById('status-message');
    
        if (currentTrackDuration > 0) {
            const scaledTime = Math.min(currentTime, currentTrackDuration); // Limitar a la duración máxima
            const progressPercent = (scaledTime / currentTrackDuration) * 100;
            progressBar.style.width = `${progressPercent}%`;
    
            timeInfo.textContent = formatTime(scaledTime); // Formatear tiempo
        } else {
            progressBar.style.width = '0%'; // Sin duración válida
            timeInfo.textContent = "0:00";
        }
    
        // Mensaje de estado
        if (!isPlaying) {
            statusMessage.textContent = "No estoy escuchando musica asi que seguramente este ocupado, durmiendo o no estoy en casa, pero aun asi escribeme, te responderé a los segundos, a ser posible";
        } else {
            statusMessage.textContent = "Estoy escuchando musica asi que seguramente este en casa, disponible para lo que quieras";
        }
    }
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }
    
    setInterval(() => {
        if (isPlaying) {
            currentTime = Math.min(currentTime + 1, currentTrackDuration); // Limita el tiempo
            updateProgressBar();
        }
    }, 1000);
    
    fetchNowPlaying();
    setInterval(fetchNowPlaying, 1000);

    function updateTime() {
        const ecuadorTimeElement = document.getElementById('ecuador-time');
        const argentinaTimeElement = document.getElementById('argentina-time');

        const ecuadorDate = new Date().toLocaleString('en-US', { timeZone: 'America/Guayaquil' });
        const argentinaDate = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

        const ecuadorTime = new Date(ecuadorDate);
        const argentinaTime = new Date(argentinaDate);

        const ecuadorHours = ecuadorTime.getHours();
        const argentinaHours = argentinaTime.getHours();

        const ecuadorAmPm = ecuadorHours >= 12 ? 'PM' : 'AM';
        const argentinaAmPm = argentinaHours >= 12 ? 'PM' : 'AM';

        const ecuadorFormattedTime = `${ecuadorHours.toString().padStart(2, '0')}:${ecuadorTime.getMinutes().toString().padStart(2, '0')}:${ecuadorTime.getSeconds().toString().padStart(2, '0')} ${ecuadorAmPm}`;
        const argentinaFormattedTime = `${argentinaHours.toString().padStart(2, '0')}:${argentinaTime.getMinutes().toString().padStart(2, '0')}:${argentinaTime.getSeconds().toString().padStart(2, '0')} ${argentinaAmPm}`;

        ecuadorTimeElement.textContent = ecuadorFormattedTime;
        argentinaTimeElement.textContent = argentinaFormattedTime;
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Script para alternar visibilidad del cuadro
    const toggleButton = document.getElementById('toggle-daily');
    const dailyContainer = document.getElementById('daily-container');

    toggleButton.addEventListener('click', () => {
        if (dailyContainer.style.display === 'none' || dailyContainer.style.display === '') {
            dailyContainer.style.display = 'block'; // Muestra el cuadro
        } else {
            dailyContainer.style.display = 'none'; // Oculta el cuadro
        }
    });


        document.addEventListener("DOMContentLoaded", function() {
            let messages = document.querySelectorAll('.message');
            let delay = 500; // Tiempo inicial de espera

            messages.forEach((message, index) => {
                setTimeout(() => {
                    message.style.opacity = 1;
                    message.style.transform = "translateY(0)";
                }, delay);
                delay += 2000; // Agrega 2 segundos entre cada mensaje
            });
        });

    document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.fade-in');

    function showElements() {
        let scrollPosition = window.innerHeight;
        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            if (position < scrollPosition) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showElements);
    showElements(); // Para mostrar los elementos que ya están en pantalla
});
