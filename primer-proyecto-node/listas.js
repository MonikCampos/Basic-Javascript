//Enunciado del ejercicio:

//Crea un archivo JS que contenga las siguientes líneas
//X- Una variable que contenga la lista de la compra (mínimo 5 elementos) 
//X- Modifica la lista de la compra y añádele "Aceite de Girasol"
//X- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
//X- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
//X- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
//X- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
//X- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
//X- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
//X- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const ListaCompras = ["carne", "lechuga", "zanahorias", "papas", "leche", "agua", "tomates"]
ListaCompras.push("Aceite de girasol")
console.log(ListaCompras)

ListaCompras.pop("Aceite de girasol")
console.log(ListaCompras)

const ListaPeliculas = [ 
    {titulo: "Avatar", director: "James Cameron", fecha: 2009},
    {titulo: "El Señor de los Anillos: el retorno del Rey", director: "Peter Jackson", fecha: 2003},
    {titulo: "Titanic", director: "James Cameron", fecha: 1997}
]
console.log(ListaPeliculas)

const ListaPeliculasNuevas = ListaPeliculas.filter(obj => obj.fecha > 2010)
console.log(ListaPeliculasNuevas)

const Directores = ListaPeliculas.map(obj => obj.director )
console.log(Directores)

const Titulos = ListaPeliculas.map(obj => obj.titulo )
console.log(Titulos)

const DirectoresTitulosConcat = Directores.concat(Titulos)
console.log(DirectoresTitulosConcat)

const DirectoresTitulosFP = [...Directores, ...Titulos]
console.log(DirectoresTitulosFP)