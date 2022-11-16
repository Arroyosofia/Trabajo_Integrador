let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La transformo en OL

let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()
console.log(id)

let generospeliculas = "https://api.themoviedb.org/3/genre/movie/list?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES"

//titulo del genero
fetch (generospeliculas)
    .then (function (response) {
        return response.json();
    })
    .then (function (respuesta) {
        console.log(respuesta);

        let genreTitle = document.querySelector('.generodrama');

        for (let i=0; i<respuesta.genres.length; i++){
            if(id == respuesta.genres[i].id){
            
            genreTitle.innerText = `Peliculas de ${respuesta.genres[i].name}`
            }    
        }
})


ruta = `https://api.themoviedb.org/3/discover/movie?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES&with_genres=${id}&sort_by=popularity.desc`
// PELICULAS 
fetch(ruta)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let pelicula = data.results
        let contenedor = document.querySelector('.pelisdrama1')
        for (let i = 0; i < 8; i++) {
            contenedor.innerHTML += `
            <a href="./detail-movie.html?id=${pelicula[i].id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo"> ${pelicula[i].title}</p>
                        <p class="año">${pelicula[i].release_date}</p>
                </div>
                </article>
            </a> `
        }
    })
    .catch(function (error) {
        console.log(error);
    })


// SERIES
let generoseries = "https://api.themoviedb.org/3/genre/tv/list?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-EN"

// titulo de la serie
fetch (generoseries)
    .then (function (response) {
        return response.json();
    })
    .then (function (respuesta) {
        console.log(respuesta);

        let genreTitle = document.querySelector('.generodrama1');

        for (let i=0; i<respuesta.genres.length; i++){
            if(id == respuesta.genres[i].id){
            
            genreTitle.innerText = `Series de ${respuesta.genres[i].name}` 
            }    
        }
})




let route = `https://api.themoviedb.org/3/discover/tv?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language&language=es-ES&with_genres=${id}&sort_by=popularity.desc`
fetch(route)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let serie = data.results
        let contenedor1 = document.querySelector('.seriesdrama')
        for (let i = 0 ; i < 8; i++) {
            contenedor1.innerHTML += `<a href="./detail-movie.html?id=${serie[i].id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${serie[i].poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo"> ${serie[i].original_name}</p>
                        <p class="año">${serie[i].first_air_date}</p>
                </div>
                </article>`
        }
    })
    .catch(function (error) {
        console.log(error);
    })

    // como hacemos si tenemos dos articulos y laS SERIES Y PELICULAS NO COMPARTEN TODOS LOS GENEROS
    // no toma el id del array genres y no puedo poner el nombre del genero en el titulo
