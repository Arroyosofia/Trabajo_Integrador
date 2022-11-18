
// 1 recuperar el storage
let recuperoStorage = localStorage.getItem('favoritos')
console.log(recuperoStorage)
 // 2 - tengo que transformar el JSON a array

let seleccionados = JSON.parse(recuperoStorage)
console.log(seleccionados)

// 3 - captura el contenedor de los elementos a mostrar
let seccion = document.querySelector('.pelifavoritas');

// 4 - evaluar si el localStorage esta vacio quiero indicarle al usuario q no hay favoritos seleccionados

if (seleccionados == null || seleccionados.length == 0 ){
    seccion.innerHTML += `<p> No hay favoritos selecionados </p>` 
}
else {
    // pedir a la api los datos de todos los ids del array de personajes elegidos
    for (let i = 0 ; i < seleccionados.length ; i++ ){
        buscarYMostrarFavoritos(seleccionados[i])
    }
}
function buscarYMostrarFavoritos(id){
    // fetch
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            let info = data.results
            seccion.innerHTML += `<a href="./detail-movie.html?id=${info.id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${info.poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo">${info.title}</p>
                        <p class="año">${info.release_date}</p>
                </div>
                </article>
            </a> `
        })
        .catch(function(e){
            console.log(e)
        })


}