let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL

let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()
console.log(id)

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let section = document.querySelector('.infoserie')

        section.innerHTML += `
        <img class="fotogame" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="foto"> 
        <div class="gameinfo">
            <h1 class="titulogame">${data.original_name}</h1>
            <div><p class="sinopsis">${data.overview}</p></div>
            <ul>
                <li><strong class="info2">Calificacion:</strong> ${data.vote_average}</li>
                <li ><strong class="info2"> Fecha de estreno: </strong>${data.first_air_date}</li>
                <li class="infogen"><strong class="info2">Generos:</strong></li>
                <li><strong class="info2"> Cantidad de temporadas:</strong> ${data.number_of_seasons}</li>
                <li class="infonet"><strong class="info2" >Plataformas: </strong></li>
                <li><strong class="info2 rec"> Ver Recomendaciones</strong></li>
             </ul>
             <form action="./favorites.html" method="get"> 
              <button class="botonfav" type="button">
                <img src="./fav/white-star-icon-13.png" class="estrella"> 
              </button>  
             </form>  
          </div`
        let lista = document.querySelector('.infogen')
        for (let i=0 ; i < data.genres.length; i++){
            lista.innerHTML +=  ` <a href="./detail-generes.html?id=${data.genres[i].id}">${data.genres[i].name} </a>`
        }
        let plataforma = document.querySelector('.infonet')
        for (let i = 0;i<data.networks.length; i++ ){
            plataforma.innerHTML += data.networks[i].name 
        }
        
    })
    .catch(function(error){
        console.log(error);
    })

// el boton de sugeridos
let ruta = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES` 

fetch(ruta)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    info = data.results
    let container = document.querySelector(".recomendaciones");
    let main = document.querySelector(".infoserie");
    let titulorec = document.querySelector(".titulorec")
    let texto = document.querySelector(".rec")
    texto.addEventListener("click", function(){
        main.style.display = "none"
        titulorec.style.display = "block"
        container.style.display = "flex"

        for (let i = 0 ; i < 5; i++) {
            
            container.innerHTML += `
            <a href="./detail-series.html?id=${info[i].id}">
            <article class="peliD">
                <img class="imagenD"  src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}"alt="foto">
                <div class="tituloaño">
                        <p class="titulo"> ${info[i].name}</p>
                        <p class="año">${info[i].first_air_date}</p>
                </div>
                </article>
            </a>`

}})})

// Series favoritas

// 1 - crear un array para ir completando con datos
let SerieFav = [];

// 2 - recupero datos
let recuperoStorage = localStorage.getItem('SerieFav');
console.log(recuperoStorage)
//3 - chequeo y agrego info del localStorage en el array

if (recuperoStorage != null) {
    // transformar el dato en formato JSON a un tipo de dato que podamos trabajar en java
    SerieFav = JSON.parse(recuperoStorage);
}
// 4 - deberia capturar algun elemento del Dom q se refiere a favoritod

let boton = document.querySelector(".botonfav")
// 5 chequear q el id este en el array para poder cambiar el texto al usuario
if (SerieFav.includes(id)){
   boton.innerText = 'sacar de favoritos' 
}
// 6 - cuando el usuario haga click en agregar a favoritos --> agregar ese id dentro d

// definir un evento para ese elemento del dom
boton.addEventListener('click', function(e){
    //evito comportamiento por default
    e.preventDefault();
    if (SerieFav.includes(id)){
        // si el id esta en el array
        let indice = SerieFav.indexOf(id)
        // borar a partir de este numero indice , un elemento
        SerieFav.splice(indice, 1);
        boton.innerText = 'Agregar a favoritos'
        boton.style.color = "#ccc"
    }
    else {
        //agregar a SerieFav
        SerieFav.push(id);
        boton.innerText = 'Sacar de favoritos'
        boton.style.color = "#ccc"
    }
    // pasar de un array a transforamrlo en JSON para guardarlo en el localStorage

    let seriesFavoritasToString = JSON.stringify(SerieFav)
    localStorage.setItem('SerieFav', seriesFavoritasToString)
    console.log(localStorage)
}) 