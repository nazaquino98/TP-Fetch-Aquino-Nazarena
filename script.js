document.addEventListener("DOMContentLoaded", () => {
    const emojiContainer = document.getElementById("emoji-container");

    // Funcion para obtener los datos de la API
    const procesarFetch = async () => {
        try {
            const respuesta = await fetch("https://emojihub.yurace.pro/api/all");
            if (!respuesta.ok) {
                throw new Error("La respuesta de la red no fue satisfactoria");
            }
            const info = await respuesta.json();
            mostrarEmojis(info);
        } catch (error) {
            console.log("Hubo un error", error);
        }
        
    }

    // Funcion para mostrar los emojis en la pagina
    function mostrarEmojis(emojis) {
        emojis.forEach(emoji => {
            const emojiElement = document.createElement("div");
            emojiElement.classList.add("emoji");
            emojiElement.innerHTML = emoji.htmlCode[0];
            emojiContainer.appendChild(emojiElement);
        });
    }

    // Llamar a la funcion para obtener y mostrar los emojis
    procesarFetch();
});