        const pageCreationDate = new Date(2025, 0, 12);
        function updatePageCounter() {
            const today = new Date();
            const diffTime = today - pageCreationDate;
            const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById("page-counter").textContent = `Llevo ${daysPassed} días contandote sobre mi y lo que siento por ti. Cada palabra escrita es un reflejo de mi amor eterno, un testimonio de mi compromiso de esperar por la mujer que llenaba mis días de paz y alegría.`;
        }
        updatePageCounter();
        setInterval(updatePageCounter, 86400000);


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
