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

        

    })
    .catch(function (error) {
        console.log(error)
    })


    