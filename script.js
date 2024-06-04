let miNombre = ""

const miPromesa = new Promise ((cumple, miente) => {
  setTimeout(() => {
    //cumple("naza")

    miente("naza miente")

    
  }, 2000)
})

miPromesa
    .then((laRespuesta) => {
      miNombre = laRespuesta
    })
    .catch((error) => {
      console.log(error);
    })

    const procesarFetch = async (link) => {
        try {
            const respuesta = await fetch(link) 
            const info = await respuesta.json()
            return info
        } catch (error) {
            console.log("Hubo un error")
        }
    }