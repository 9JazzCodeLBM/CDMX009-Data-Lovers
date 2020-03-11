
import data from './data/pokemon/pokemon.js';
let list = data.pokemon

list.map(p => console.log(p.name));
list.map(p => console.log(p.type));
//let nombre = list[151].name;

// esta es una función de ejemplo
//var Contenido = document.querySelector(#tipos)
//export const example = () => {
//return 'example';
//}
//let nombre = list[151].name;
//list.map(p=>console.log(p.name));
//let filtrada = list.filter(p=>p.name==="Pikachu"); // filter devuelve una lista filtrada
let electrics = list.filter(p => p.type.includes("Electric"));
console.log(electrics);
// Filtra los pokemons por weaknesses: Fire y muestralos en consola
let weAk = list.filter(p => p.weaknesses.includes("Fairy"));
console.log(weAk);
//let pokes = document.querySelector('#pokes');

//weAk.map(pok=>{
  //let p = document.createElement('p');
  //p.classList.add("card");
  //p.innerHTML = `
//<img src=${pok.img} />
//<p>${pok.name}</p>
//`;
//  pokes.appendChild(p);
//});

// map, filter, forEach, event: change (select)
