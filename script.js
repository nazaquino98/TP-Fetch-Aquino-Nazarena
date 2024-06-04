document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-container');

    // Función para obtener los datos de la API
    async function fetchEmojis() {
        try {
            const response = await fetch('https://emojihub.yurace.pro/api/all');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const emojis = await response.json();
            displayEmojis(emojis);
        } catch (error) {
            console.error('Error fetching emojis:', error);
        }
    }

    // Función para mostrar los emojis en la página
    function displayEmojis(emojis) {
        emojis.forEach(emoji => {
            const emojiElement = document.createElement('div');
            emojiElement.classList.add('emoji');
            emojiElement.innerHTML = emoji.htmlCode[0]; // Usamos innerHTML para renderizar el HTML del emoji
            emojiContainer.appendChild(emojiElement);
        });
    }

    // Llamar a la funcion para obtener y mostrar los emojis
    fetchEmojis();
});


  