// Peliculas Populares

let url = "https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let peliculasPopulares = data.results
        let seccionPeliculasP = document.querySelector(".peliculaspopulares");
        for (let i = 0; i < 6; i++) {
            seccionPeliculasP.innerHTML += `<a href="./detail-movie.html?id=${peliculasPopulares[i].id}">
            <article class="peli">
                <img class="imagenPS"  src="https://image.tmdb.org/t/p/w500/${peliculasPopulares[i].poster_path}" alt="imagen">
                <div class="tituloaño">
                    <p class="titulo">${peliculasPopulares[i].title}</p>
                    <p class="año">${peliculasPopulares[i].release_date}</p>
                </div>
            </article>
        </a>`

        }

    })
    .catch(function (error) {
        console.log(error)
    })

// series Populares

let ruta = "https://api.themoviedb.org/3/tv/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e"

fetch(ruta)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let seriesPopulares = data.results
        let seccionSeriesP = document.querySelector(".seriespopulares");
        for (let i = 0; i < 6; i++) {
            seccionSeriesP.innerHTML += `<a href="./detail-series.html?id=${seriesPopulares[i].id}">
            <article class="serie">
                <img class="imagenPS"  src="https://image.tmdb.org/t/p/w500/${seriesPopulares[i].poster_path}" alt="imagen">
                <div class="tituloaño">
                    <p class="titulo">${seriesPopulares[i].name}</p>
                    <p class="año">${seriesPopulares[i].first_air_date}</p>
                </div>
            </article>
        </a>`

        }

    })
    .catch(function (error) {
        console.log(error)
    })

// Top Rated

let roadtrip = "https://api.themoviedb.org/3/movie/top_rated?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e"
fetch(roadtrip)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let peliculasValorada = data.results
        let seccionPeliculasV = document.querySelector(".pelisvaloradas");
        for (let i = 0; i < 6; i++) {
            seccionPeliculasV.innerHTML += `<a href="./detail-movie.html?id=${peliculasValorada[i].id}">
            <article class="peli">
                <img class="imagenPS"  src="https://image.tmdb.org/t/p/w500/${peliculasValorada[i].poster_path}" alt="imagen">
                <div class="tituloaño">
                    <p class="titulo">${peliculasValorada[i].title}</p>
                    <p class="año">${peliculasValorada[i].release_date}</p>
                </div>
            </article>
        </a>`

        }

    })
    .catch(function (error) {
        console.log(error)
    })

// validacion de formulario
let buscador  = document.querySelector('.busqueda')
let formulario = document.querySelector('form')
let campoEvaluar = document.querySelector("[name = 'Search']")
let alert = document.querySelector('.alert')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if (campoEvaluar.value == ""){
        alert.innerText = 'El campo no debe estar vacio'
    }
    else if (campoEvaluar.value.length < 3) {
        alert.innerText = 'Tenes que ingresar mas de 3 caracteres'
        
    }
    else {
        
    }
})
