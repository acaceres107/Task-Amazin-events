
import {render, renderCheck, filter} from "../module/functions.js"
const $div = document.getElementById("cardcolumn")
const $checkContainer = document.getElementById('checkContainer')
const $search = document.getElementById("search")
let datas;


fetch( "https://amazing-events.onrender.com/api/events")
    .then( res => res.json())
    .then( datos => {
        datas = datos.events
        console.log(datos)
        render(datas, $div)
        renderCheck(datas, $checkContainer)
    } )
    .catch( err => console.log(err))


$checkContainer.addEventListener('change', () =>{
    let filtro = filter(datas, $search)
    render(filtro, $div)
})

$search.addEventListener('input', () => {
    let filtro = filter(datas, $search)
    render(filtro, $div)
})


