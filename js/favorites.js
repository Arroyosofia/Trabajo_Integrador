// favoritos peliculas
// 1 recuperar el storage
let recuperoStoragePelis = localStorage.getItem('favoritos')
console.log(recuperoStoragePelis)

let recuperoStorageSeries = localStorage.getItem('Seriefavs')
console.log(recuperoStorageSeries)
// 2 - tengo que transformar el JSON a array

let seleccionadosPelis = JSON.parse(recuperoStoragePelis)
console.log(seleccionadosPelis)

let serieSeleccionados = JSON.parse(recuperoStorageSeries)
console.log(serieSeleccionados)

// 3 - captura el contenedor de los elementos a mostrar
let seccionPelis = document.querySelector('.pelifavoritas');

let seccionSerie = document.querySelector('.seriefavoritas');
// 4 - evaluar si el localStorage esta vacio quiero indicarle al usuario q no hay favoritos seleccionados

if (seleccionadosPelis == null || seleccionadosPelis.length == 0) {
    seccionPelis.innerHTML += `<p> No hay peliculas favoritas selecionadas </p>`
}
else {
    // pedir a la api los datos de todos los ids del array de peliculas elegidas
    for (let i = 0; i < seleccionadosPelis.length; i++) {
        buscarYMostrarFavoritos(seleccionadosPelis[i])
    }
}
function buscarYMostrarFavoritos(id) {
    // fetch
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            seccionPelis.innerHTML += `<a href="./detail-movie.html?id=${data.id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${data.poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo">${data.title}</p>
                        <p class="año">${data.release_date}</p>
                </div>
                </article>
            </a> `

        })
        .catch(function (e) {
            console.log(e)
        })}

// series favoritas

/* if (serieSeleccionados == null || serieSeleccionados.length == 0) {
    seccion.innerHTML += `<p> No hay series favoritas seleccionados </p>`
}
else {
    // pedir a la api los datos de todos los ids del array de series elegidas
    for (let i = 0; i < serieSeleccionados.length; i++) {
        buscarYMostrarFavoritos(serieSeleccionados[i])
    }
}
function buscarYMostrarFavoritos(id) {
    // fetch
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            seccionSerie.innerHTML += `<a href="./detail-series.html?id=${data.id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${data.poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo">${data.name}</p>
                        <p class="año">${data.first_air_date</p>
                </div>
                </article>
            </a> ` 

         })
        .catch(function (e) {
            console.log(e)
        })}  */