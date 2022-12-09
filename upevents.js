const div = document.getElementById("cardcolumn")
const events = data.events

function render(list, container){
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
render(events, div)
