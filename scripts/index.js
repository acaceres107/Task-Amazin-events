
const $div = document.getElementById("cardcolumn")
const $checkContainer = document.getElementById('checkContainer')
const $search = document.getElementById("search")
const events = data.events

render(events, $div)
renderCheck(events, $checkContainer)

$checkContainer.addEventListener('change', () =>{
    let filtro = filter(events, $search)
    render(filtro, $div)
})

$search.addEventListener('input', () => {
    let filtro = filter(events, $search)
    render(filtro, $div)
})

function render(list, container){
    
    let html = ""
    for (let event of list){
        html += `   
            <div class="cards bg-secondary">
            <img src=${event.image} class="card-img-top mt-2 cardPhotos"  alt="food fair">
            <div class="card-body ">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p> $${event.price}</p>
                <a href="./details.html?id=${event._id}" class="btn btn-primary bg-warning text-dark">More info</a>
            </div>
            </div>
        </div>`
        }
    container.innerHTML = html;
}

function renderCheck(list, container){
    let html = ''
    let newSet = new Set(list.map(element => element.category))
    let categories = Array.from(newSet)
    categories.forEach((element) => {
        html += `<label for="${element}">${element}</label>
        <input type="checkbox" id="${element}" value="${element}">`
    })
    container.innerHTML = html
}

function filterCategory(events){
    const checked = document.querySelectorAll("input[type = 'checkbox']:checked")
    let selectedCategories = Array.from(checked).map((element) => element.value)
    const filter = selectedCategories.map((element) => events.filter((event) =>{
        return event.category === element
    })).flat()
    if(!checked.length){
        return events
    }
    else{
        return filter
    }
}

function filterSearch(events, input){
        return events.filter((event) =>
        event.name.toUpperCase().includes(input.value.toUpperCase())
    );
}

function filter(events, search){
    let filterByCategory = filterCategory(events)
    let filterBySearch = filterSearch(filterByCategory, search)
    return filterBySearch
}

