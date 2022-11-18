let query = location.search; //location search es toda la url de la pag la guardas en la variable query 
let stringToObject = new URLSearchParams(query); //metes esa variable en el metodo, te devuelve todas las urls de la pag
let aBuscar = stringToObject.get('Search'); // agarras search 
let url = `https://api.themoviedb.org/3/search/movie?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=en-US&query=${aBuscar}&page=1&include_adult=false`

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let informacion = data.results
        let conteiner = document.querySelector('.searchresults');
        let Searchtitle = document.querySelector('.titulohp')
        let fondo = document.querySelector('.fondodrama')
        if (informacion.length == 0){
            Searchtitle.innerText = 'No se encontraron resultados'
            fondo.style.display = 'none'
        }
        else{
            for (let i = 0; i<12; i++){
                Searchtitle.innerText =  `Resultado de busqueda: ${aBuscar}`
                conteiner.innerHTML  += `
                <a href="./detail-movie.html?id=${informacion[i].id}">
                <article class="pelif">
                    <img class="imagenHP"  src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="imagen">
                    <div class="tituloañoHP">
                        <p class="titulo">${informacion[i].original_title}</p>
                        <p class="año">${informacion[i].release_date}</p>
                    </div>
                </article>`
            }
        }
        

    })
    .catch(function (error) {
        console.log(error)
    })

let ruta =`https://api.themoviedb.org/3/search/tv?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=en-US&page=1&query=${aBuscar}&include_adult=false`
fetch(ruta)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let informacion = data.results
        let conteiner = document.querySelector('.searchresults');
        let Searchtitle = document.querySelector('.titulohp')
        let fondo = document.querySelector('.fondodrama')
        if (informacion.length == 0){
            Searchtitle.innerText = 'No se encontraron resultados'
            fondo.style.display = 'none'
        }
        else{
            for (let i = 0; i<12; i++){
                Searchtitle.innerText =  `Resultado de busqueda: ${aBuscar}`
                conteiner.innerHTML  += `
                <a href="./detail-series.html?id=${informacion[i].id}">
                <article class="pelif">
                    <img class="imagenHP"  src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="imagen">
                    <div class="tituloañoHP">
                        <p class="titulo">${informacion[i].original_name}</p>
                        <p class="año">${informacion[i].first_air_date}</p>
                    </div>
                </article>`
            }
        }
        

    })
    .catch(function (error) {
        console.log(error)
    })


    