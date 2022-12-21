const $table1 = document.getElementById("table1")
const $table2 = document.getElementById("table2")
const $table3 = document.getElementById("table3")
let datas;


fetch( "https://amazing-events.onrender.com/api/events")
    .then( res => res.json())
    .then( datos => {
        datas = datos.events
        porcentajeMay (datas, $table1)
        capacity(datas, $table1)
        futureEvents(datas, $table2)
        pastEvents(datas, $table3)
    } )
    .catch( err => console.log(err))

function porcentajeMay(datas, container){
let html = ""
let events = datas.map(element => {
    return {name: element.name, porcentaje: element.assistance / element.capacity *100}}).filter(element=> element.porcentaje)
    let numMay = Math.max(...events.map(element => element.porcentaje))
    numMay = events.find(element=> element.porcentaje === numMay)
    let numMin = Math.min (...events.map(element => element.porcentaje))
    numMin = events.find(element=> element.porcentaje === numMin)
    console.log(numMin)
    html = `
    <td>${numMay.name} ${numMay.porcentaje.toFixed(2)}</td>
    <td>${numMin.name} ${numMin.porcentaje.toFixed(2)}</td>
    `
    container.innerHTML = html
}

function capacity(datas, container){
    let html = ""
    let capacityEvents = datas.map(element=>{
    return {name: element.name, capacidad:element.capacity}
    })
    let max = Math.max(...capacityEvents.map(element => element.capacidad))
    let capaMax = capacityEvents.find(element => element.capacidad === max)
    html = `
    <td>${capaMax.name} ${capaMax.capacidad}</td>`
    container.innerHTML += html
}

function futureEvents(datas, container){
    let html = ""
    datas.forEach(element => {
    if(element.date.includes("2022")){
    let attendance = element.estimate/element.capacity * 100
    html += `<tr>
    <td class="data">${element.category}</td>
    <td class="data">${element.price * element.estimate}</td>
    <td class="data">${attendance.toFixed(2)}</td>
    </tr>`
}
});
container.innerHTML = html
}

function pastEvents(datas, container){
    let html = ""
    datas.forEach(element=>{
        if(element.date < "2022"){
            let attendance = element.assistance/element.capacity * 100
            html += `<tr>
            <td class="data">${element.category}</td>
            <td class="data">${element.price * element.assistance}</td>
            <td class="data">${attendance.toFixed(2)}</td>
            </tr>`
        }
    });
    container.innerHTML = html
}
