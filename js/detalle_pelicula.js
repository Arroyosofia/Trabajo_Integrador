// detalle peliculas populares y peliculas mas valoradas

let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL

let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()
console.log(id)

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`

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
        <h1 class="tituloparasite">${data.title}</h1>
        <div><p class="sinopsis">${data.overview}</p></div>
        <ul>
            <li><strong class="info">Calificacion:</strong> ${data.vote_average} </li>
            <li ><strong class="info"> Fecha de estreno: </strong>${data.release_date}</li>
            <li class="infonet"><strong class="info"> Plataformas: </strong></li>
            <li class="infogen1"><strong class="info">Generos:</strong></li> 
            <li><strong class="info"> Duracion:</strong> ${data.runtime}</li>
            <li ><strong class="info rec"> Ver Recomendaciones</strong></li>
         </ul>
         <button class="botonfav" type="button">
            <img src="./fav/white-star-icon-13.png" class="estrella">
         </button> 
        </div>`

        

        let lista = document.querySelector('.infogen1')
        for (let i = 0; i < data.genres.length; i++) {
            lista.innerHTML += ` <a href="./detail-generes.html?id=${data.genres[i].id}">${data.genres[i].name} </a>`
        }
        
            
    })
ruta1 = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e`
    fetch(ruta1)
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            network = data.results
            let plataforma = document.querySelector('.infonet')
            if (network.AR !== undefined) {
                plataforma.innerHTML += `${network.AR.flatrate[0].provider_name}`
            } else {
                plataforma.innerHTML += "No esta disponible en Argentina"
            }
        })
        .catch(function (error) {
            console.log(error);
        })




//boton de sugeridos
let ruta = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e`

fetch(ruta)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    info = data.results
    let container = document.querySelector(".recomendaciones");
    let main = document.querySelector(".infopelicula");
    let titulorec = document.querySelector(".titulorec")
    let texto = document.querySelector(".rec")
    texto.addEventListener("click", function(){
        main.style.display = "none"
        titulorec.style.display = "block"
        container.style.display = "flex"

        for (let i = 0 ; i < 5; i++) {
            
            container.innerHTML += `
            <a href="./detail-movie.html?id=${info[i].id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo"> ${info[i].title}</p>
                        <p class="año">${info[i].release_date}</p>
                </div>
                </article>
            </a>`

}})

// favoritos
// 1 - crear un array para ir completando con datos
let favoritos = [];

// 2 - recupero datos
let recuperoStorage = localStorage.getItem('favoritos');
console.log(recuperoStorage)
//3 - chequeo y agrego info del localStorage en el array

if (recuperoStorage != null) {
    // transformar el dato en formato JSON a un tipo de dato que podamos trabajar en java
    favoritos = JSON.parse(recuperoStorage);
}
// 4 - deberia capturar algun elemento del Dom q se refiere a favoritod

let link = document.querySelector('.botonfav')
// 5 chequear q el id este en el array para poder cambiar el texto al usuario
if (favoritos.includes(id)){
   link.innerText = 'sacar de favoritos' 
}
// 6 - cuando el ususario haga clicj en agregar a favoritos --> agregar ese id dentro d

// definir un evento para ese elemento del dom
link.addEventListener('click', function(e){
    //evito comportamiento por default
    e.preventDefault();
    if (favoritos.includes(id)){
        // si el id esta en el array
        let indice = favoritos.indexOf(id)
        // borar a partir de este numero indice , un elemento
        favoritos.splice(indice, 1);
        link.innerText = 'Agregar a favoritos'
        link.style.color = "#ccc"
    }
    else {
        //agregar a favoritos
        favoritos.push(id);
        link.innerText = 'Sacar de favoritos'
        link.style.color = "#ccc"
    }
    // pasar de un array a transforamrlo en JSON para guardarlo en el localStorage

    let pelisFavoritasToString = JSON.stringify(favoritos)
    localStorage.setItem('favoritos', pelisFavoritasToString)
    console.log(localStorage)
}) 
    

    
})




