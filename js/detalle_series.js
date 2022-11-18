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

let ruta = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ARG` // preguntar como hacer el segundo fetch para las plataformas

// falta hacer el boton de sugeridos