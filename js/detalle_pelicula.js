// detalle peliculas populares y peliculas mas valoradas

let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL

let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()
console.log(id)

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ARG`

console.log(url);

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        //Capturamos DOM
        let section = document.querySelector('.infopelicula')

        section.innerHTML += `
        <img class="fotoparasite" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="foto">
        <div class="parasiteinfo">
        <h1 class="tituloparasite">${data.original_title}</h1>
        <div><p class="sinopsis">${data.overview}</p></div>
        <ul>
            <li><strong class="info">Calificacion:</strong> ${data.vote_average} </li>
            <li ><strong class="info"> Fecha de estreno: </strong>${data.release_date}</li>
            <li><strong class="info"> Plataformas:</strong></li>
            <li class="infogen1"><strong class="info">Generos:</strong></li> 
            <li><strong class="info"> Duracion:</strong> ${data.runtime}</li>
         </ul>
         <button class="botonfav" type="button">
            <img src="./fav/white-star-icon-13.png" class="estrella"> 
         </button> `

        let lista = document.querySelector('.infogen1')
        for (let i = 0; i < data.genres.length; i++) {
            lista.innerHTML += ` <a href="./detail-generes.html?id=${data.genres[i].id}">${data.genres[i].name} </a>`
        }

    })

    .catch(function (error) {
        console.log(error);
    })

url = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=<5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ARG`
