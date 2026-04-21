export function filterData (data){
    const filtro = data.map(user => ({user: user.name, city: user.city}))
    console.log(filtro)
}