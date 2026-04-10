const URL = "https://jsonplaceholder.typicode.com/todos/1"

fetch(URL)
    .then(response => response.json ())
    .then(response => console.log(response))
    .catch(error => console.log(error))

const obtenerData = async () => {
    try{
        const response = await fetch(URL)
        const dataFinal = await response.json()
        renderData(dataFinal)
    }catch (error){
        console.log(error)
    }
}

obtenerData()

function renderData(apiResponse){
    apiResponse.forEach(element => {
        const toInsert = documen.createElement("section")
        toInsert.innerHTML = `<article class="algo">
        <h1>${element.title}</h1>
        <p>${element.completed}</p>
        </article>`
        toInsert.classList.add("otra")
        document.body.append(toInsert)
    })
}