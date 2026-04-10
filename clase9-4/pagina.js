const API = "https://randomuser.me/api/"

const obtenerData = async () => {
    try{
        const response = await fetch(API)
        const dataFinal = await response.json()
        renderData(dataFinal)
    }catch (error){
        console.log(error)
    }
}
obtenerData()

function renderData(apiResponse){
    const imagen = document.createElement("img")
    imagen.setAttribute("src", apiResponse.results[0].picture.large)
    imagen.classList.add("imag")
    document.body.append(imagen)
}