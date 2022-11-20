
let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES'

// para peliculas
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector(".contenedorgen");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<article class="generos"> <a href="./detail-generes.html?id=${generos[i].id}"> ${generos[i].name}</a> </article>`

        }}

    )
    .catch(function (error) {
        console.log(error)
    })

// Para series

let ruta = 'https://api.themoviedb.org/3/genre/tv/list?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES'
fetch(ruta)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector(".contenedorgen1");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<article class="generos"> <a href="./detail-generes.html?id=${generos[i].id}"> ${generos[i].name}</a> </article>`

        }}

    )
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
        this.submit()
    }
})
