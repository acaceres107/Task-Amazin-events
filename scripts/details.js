const info = data.events

const id = new URLSearchParams(location.search).get("id")
console.log(id)
const events = info.find(element => element._id == id)
console.log(events)
const container = document.getElementById("container")
container.innerHTML = `
        <div>
        <img class="books" src="${events.image}" alt="books">
        </div>
        <div class="p-4 bg-dark text-white">
        <h2>${events.name}</h2>
        <p>${events.description}</p>
        <p>${events.date}</p>
        </div>
        `

