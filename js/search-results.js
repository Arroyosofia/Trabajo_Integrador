let query = location.search;
let stringToObject = new URLSearchParams(query);
let aBuscar = stringToObject.get('Search');
let buscador = document.querySelector('.searchresults');
let searchTitle = document.querySelector('.titulohp');


