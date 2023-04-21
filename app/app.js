fetch("https://rickandmortyapi.com/api/character")
.then((response)=>{return response.json()
})
.then((data)=> {
     const personajes = data.results; 
     const $contenedor = document.getElementById("grid-item")
    for( let i =0; i < personajes.length; i++) {
        $contenedor.innerHTML += `
        <div class="grid-item">
          <div class="grid-front">
          <img src="${personajes[i].image}">
           </div>
           <article class="grid-back">
           <h3>${personajes[i].name}</h3>
           <p> Gender:${personajes[i].gender}</p>
           <p> Species:${personajes[i].species}</p>
           <p> Status:${personajes[i].status}</p>
           <p> Origin:${personajes[i].origin.name}</p>
           </article>
        </div>
           `
    }
})
