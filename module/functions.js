let datas;


fetch( "https://amazing-events.onrender.com/api/events")
    .then( res => res.json())
    .then( datos => {datas = datos.events})
    .catch( err => console.log(err))

export function render(list, container){
    
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
export function render1(list, container){
    let html = ""
    for (let event of list){
        if (event.date >= "2022"){ 
        html += `   
            <div class="cards bg-secondary">
            <img src=${event.image} class="card-img-top mt-2 cardPhotos"  alt="food fair">
            <div class="card-body ">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p>$${event.price}</p>
                <a href="./contact.html" class="btn btn-primary bg-warning text-dark">Contact Us</a>
            </div>
            </div>
        </div>`}
        }
    container.innerHTML = html;
}
export function render2(list, container){
    let html = ""
    for (let event of list){
        if (event.date < "2022"){ 
        html += `   
            <div class="cards bg-secondary">
            <img src=${event.image} class="card-img-top mt-2 cardPhotos"  alt="food fair">
            <div class="card-body ">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p>$${event.price}</p>
                <a href="./contact.html" class="btn btn-primary bg-warning text-dark">Contact Us</a>
            </div>
            </div>
        </div>`}
        }
    container.innerHTML = html;
}
export function renderCheck(list, container){
    let html = ''
    let newSet = new Set(list.map(element => element.category))
    let categories = Array.from(newSet)
    categories.forEach((element) => {
        html += `<label for="${element}">${element}</label>
        <input type="checkbox" id="${element}" value="${element}">`
    })
    container.innerHTML = html
}


export function filterCategory(events){
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

export function filterSearch(events, input){
        return events.filter((event) =>
        event.name.toUpperCase().includes(input.value.toUpperCase())
    );
}

export function filter(events, search){
    let filterByCategory = filterCategory(events)
    let filterBySearch = filterSearch(filterByCategory, search)
    return filterBySearch
}


