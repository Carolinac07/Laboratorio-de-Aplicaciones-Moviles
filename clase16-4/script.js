import { fetchData } from "./script2.js"
import { filterData } from "./filtrar.js"
const data = await fetchData()

filterData(data)